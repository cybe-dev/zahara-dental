import "../styles/globals.css";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-grayscale-200 min-h-screen w-full overflow-x-hidden">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Noto+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
