import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Top Fragrance</title>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>

        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&display=swap');
        </style>
      </Head> */}
    </Head>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
