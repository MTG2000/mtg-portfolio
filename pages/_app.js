import Layout from "../components/Layout";

// Global Styles
import "../components/styles/App.scss";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

import "../helpers/iconsLibrary";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
