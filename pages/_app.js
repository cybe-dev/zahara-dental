import "../styles/globals.css";
import Head from "next/head";
import Error from "next/error";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import WebInterface from "../src/context/web-interface";
import BlogHeader from "../src/components/BlogHeader";

const HeadingTag = ({ metaTag = [] }) => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&family=Noto+Sans:wght@400;700&family=Poppins:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    {metaTag.length
      ? metaTag.map((item, index) => (
          <meta name={item.name} key={`${index}`} content={item.content} />
        ))
      : null}
  </Head>
);

function MyApp({ Component, pageProps }) {
  if (pageProps?.status === 500) {
    return <Error statusCode={pageProps.status} />;
  } else if (pageProps.basicInformation) {
    if (!pageProps.blogPage) {
      return (
        <WebInterface basicInformation={pageProps.basicInformation}>
          <div className="bg-grayscale-200 min-h-screen w-full overflow-x-hidden flex flex-col">
            <HeadingTag metaTag={pageProps.metaTag || []} />
            <Header
              services={pageProps.services}
              subServices={pageProps.subServices}
              {...pageProps.headerProps}
            />
            <div className="flex-1">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </WebInterface>
      );
    } else {
      return (
        <WebInterface basicInformation={pageProps.basicInformation}>
          <HeadingTag metaTag={pageProps.metaTag || []} />
          <div className="bg-grayscale-200 min-h-screen w-full overflow-x-hidden flex flex-col">
            <BlogHeader
              categoryList={pageProps.categoryList}
              {...pageProps.headerProps}
            />
            <div className="flex-1">
              <Component {...pageProps} />
            </div>
            <Footer withoutSupport={true} />
          </div>
        </WebInterface>
      );
    }
  } else {
    return <Error statusCode={404} />;
  }
}

export default MyApp;
