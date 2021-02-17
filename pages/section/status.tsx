import * as React from "react";
import { useRouter } from 'next/router'

import Layout from "../../src/Layouts/layout";
import { loadData } from "../../src/redux/Services/actions";

interface Props {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const Index: any = (props:any) => {
    const router = useRouter()
    const { status } = router.query
    return <> {status!=='NON-DISRUPTED'&&<h3>DISRUPTED</h3>}<div>{status}</div></>

};
Index.Layout = Layout;
Index.getInitialProps = async (props: Props) => {
  const { store, isServer } = props.ctx;

  if (!store.getState().services || store.getState().services!=={}) {
    store.dispatch(loadData());
  }

  return { isServer };
};

export default Index;
