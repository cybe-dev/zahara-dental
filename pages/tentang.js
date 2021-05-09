import Head from "next/head";
import Container from "../src/components/Container";
import HeadingPage from "../src/components/HeadingPage";

export default function Tentang() {
  return (
    <Container>
      <Head>
        <title>Tentang Kami</title>
      </Head>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            title: "Tentang Kami",
          },
        ]}
        title="Tentang Kami"
      />
      <div className="bg-grayscale-100 p-5 mb-16 noreset rounded-md">
        <div className="h-64 w-64 mt-5 mr-5 mb-5 float-left bg-grayscale-200" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra. Sed nibh
          nisl, tristique a eros posuere, viverra volutpat ex. Donec nunc
          sapien, maximus a pretium a, tristique sit amet elit. Nulla molestie
          egestas finibus. Quisque non dolor nunc. Nunc justo ante, pellentesque
          nec semper sit amet, rhoncus quis dui. In laoreet sit amet nisl non
          accumsan. Fusce nec lacus tortor. Donec ullamcorper neque purus,
          malesuada facilisis quam rhoncus sed. Phasellus interdum orci non
          libero gravida condimentum. Etiam quis malesuada lectus. Morbi aliquet
          placerat libero, quis dictum turpis fringilla auctor.
        </p>

        <p>
          Etiam luctus facilisis sapien, in gravida diam feugiat sed. Praesent
          tincidunt lectus sit amet urna blandit sollicitudin. Suspendisse quis
          tempor ipsum. Aenean nec viverra velit. Nulla egestas sit amet est
          quis convallis. Cras tempus libero nec facilisis sodales. Sed finibus
          dui arcu, ut volutpat lacus malesuada euismod. Maecenas et lobortis
          odio. Aenean eu nunc arcu. Cras tellus urna, consequat sed est ac,
          lobortis rhoncus mauris. Ut pellentesque commodo arcu ut pulvinar.
        </p>

        <p>
          Vivamus porttitor sed lacus a porttitor. Sed ut elit non est pretium
          tempus. Cras suscipit mollis efficitur. Morbi nec sapien vel massa
          cursus iaculis. Quisque posuere sodales condimentum. Etiam eleifend
          justo ac metus cursus porttitor. Praesent sagittis vulputate lacus,
          sed scelerisque quam tincidunt in. Donec pulvinar a justo sed dictum.
          Integer accumsan lectus ac metus interdum, eu egestas nibh aliquam.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>

        <p>
          Mauris at elit massa. Morbi egestas quis nibh sed ullamcorper. Duis
          placerat nibh eu ipsum ultrices, sed dignissim felis tincidunt. Donec
          et felis et nisl gravida ultrices quis in nunc. Suspendisse mollis leo
          quis elit imperdiet efficitur. Quisque maximus ipsum quis hendrerit
          tincidunt. Vivamus pellentesque ultricies elementum. Sed at suscipit
          quam, in bibendum nulla. Donec accumsan eget enim sed mollis. Fusce
          pellentesque lacinia viverra. Pellentesque et ex turpis. Proin
          condimentum neque id sem congue, sed consectetur elit accumsan. Morbi
          blandit vehicula dapibus. Suspendisse potenti. Phasellus mauris neque,
          bibendum vitae ligula vitae, vulputate ultrices erat.
        </p>

        <p>
          Donec sed rutrum libero. Aenean felis nulla, placerat id rhoncus eget,
          tempus et nisl. Phasellus laoreet sit amet diam eleifend semper.
          Mauris vulputate rhoncus ex et volutpat. Maecenas placerat enim eget
          felis semper elementum. Sed sit amet mollis augue. Duis ornare
          placerat euismod.
        </p>
      </div>
    </Container>
  );
}
