import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const ProgressBar = () => {
  NProgress.configure({
    minimum: 0.6,
    easing: "ease",
    speed: 1000,
    showSpinner: false,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
};

export default ProgressBar;
