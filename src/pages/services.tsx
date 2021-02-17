import * as React from "react";
import { useSelector } from "react-redux";
import MenuBar from "../components/MenuBar/MenuBar";
// interface Props {
//   error: any;
//   lastUpdate: any;
//   light: boolean;
//   linkTo: string;
//   NavigateTo: string;
//   placeholderData: any;
//   title: string;
// }

const Services: React.FC<any> = () => {
  const {services} = useSelector(
    (state: any) => ({
      error: state.services.error,
      services: state.services,
    })
  );

  const {placeholderData} = services;
  function groupBy(list:any, keyGetter:any) {
    const map = new Map();
    list.forEach((item:any) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

const grouped = groupBy(placeholderData || [], (item:any) => item.modeName);
const navigationHeaders = Array.from(grouped.keys());
const navItems =navigationHeaders.map((key)=>{
      return {
        "name": key.toUpperCase(),
        "url": key,
        'children':grouped.get(key).map((item:any)=>{
          return {"name":item.name.toUpperCase(), url: item.name, ...item}
        }) || []
      }
  
  })
Array.from(grouped.keys()).map((key)=>{
  })
  return (
    <ul>
      <li><MenuBar menuItems={navItems}/></li>
    </ul>
  
  );
};
export default Services;
