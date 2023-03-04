import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";
import storeConfig from "../store"

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AlertProvider from "./alertProvider";

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const { store, persistor } = storeConfig()

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  useEffect(()=>{
    let comment = document.createComment(`
      =========================================================
      * Hello Mau ngapain hayoo!
      =========================================================
    `);
    document.insertBefore(comment, document.documentElement);
  },[])

  const getInitialProps = async ({ Component, router, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  const MainApp = () => {
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Notus NextJS by Creative Tim</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        </Head>
        <AlertProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AlertProvider>
      </React.Fragment>
    )
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;