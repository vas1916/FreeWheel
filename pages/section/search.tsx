import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Layout from "../../src/Layouts/layout";
import { loadData } from "../../src/redux/Search/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Typography } from "@material-ui/core";

interface Props {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}
const Index: any = (props:any) => {
  const data = useSelector((state: any) =>state.search.placeholderData);
  const dispatch = useDispatch();
  // function getSearchResults(searchTerm:any, list: any){
  //   if(list.length<1) return [];
  //   return list.filter((item:any)=>{
  //       return Object.values(item).filter((l:any)=>{return !Array.isArray(l) && isNaN(l)}).some((ii:any) => ii&& typeof ii.includes ==='function' && (ii.toUpperCase()).includes(searchTerm.toUpperCase()))
  //   })
  // }
  // const [data] = useState(search && search.placeholderData || []);
  const [searchText, setSearchText] = useState("");
  const [searchTextP, setSearchTextP] = useState("");
  // const [options, setOptions] = useState(search && search.placeholderData || []);

  // React.useEffect(()=>{
  //   const mList = getSearchResults(searchText, data)
  //   setOptions([...mList])
  // },[data])

    return <> 

<Typography>
<TextField  
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value)}}
        id="outlined-basic" label="Search" variant="outlined" />

</Typography>

    <Typography>
    <Button onClick={(e)=>{
         
         if(searchText!==searchTextP){
           setSearchTextP(searchText)
           dispatch(loadData(searchText));
         }
     }}  variant="contained" color="primary"  >Search</Button>
    </Typography>

      <div>
        {
          data && data.map((ik:any)=>{
            return <div> {ik.id}, {ik.commonName} ( {ik.lat}, {ik.lon})</div>
          })
        }
      </div>
    </>
};
Index.Layout = Layout;
Index.getInitialProps = async (props: Props) => {
  const { store, isServer } = props.ctx;
  if (!store.getState().search || store.getState().search!=={}) {
    store.dispatch(loadData('the'));
  }
  return { isServer };
};

export default Index;
