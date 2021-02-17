import * as React from "react";

import Layout from "../src/Layouts/layout";
import { loadData } from "../src/redux/Services/actions";
import { loadData as loadSearchData } from "../src/redux/Search/actions";

interface Props {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const Index: any = () => {
  return <>home page</>
};
Index.Layout = Layout;
Index.getInitialProps = async (props: Props) => {
  const { store, isServer } = props.ctx;

  if (!store.getState().services || store.getState().services!=={}) {
    store.dispatch(loadData());
  }

  if (!store.getState().search ||Object.keys( store.getState().search).length<1) {
    store.dispatch(loadSearchData(''));
  }
  return { isServer };
};

export default Index;
