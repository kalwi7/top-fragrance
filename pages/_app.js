import Layout from "../components/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Router from "next/router";
import { useState, useEffect } from "react";

const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  // console.log(ProgressBar === false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          <h1>Loading...</h1>
          <ProgressBar />
        </>
      ) : (
        <>
          <Head></Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )}
    </>
  );
}
