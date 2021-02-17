import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import App, { Container } from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/components/theme";

import createStore from "../src/redux/store";

interface IProps {
  Component: React.Component;
  store: any;
}

const EmptyLayout = ({children})=>{
  return <>{children}</>
}

class MyApp extends App<IProps> {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: any;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const Layout = Component.Layout || EmptyLayout

    return (
      <Container>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
