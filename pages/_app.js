import "../styles/globals.css";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import WebInterface from "../src/context/web-interface";

function MyApp({ Component, pageProps }) {
  return (
    <WebInterface>
      <div className="bg-grayscale-200 min-h-screen w-full overflow-x-hidden flex flex-col">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Noto+Sans:wght@400;700&family=Poppins:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header transparentFirst={pageProps.headerTransparentFirst} />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </WebInterface>
  );
}

export default MyApp;
