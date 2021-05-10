import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import { default as PromoParent, PromoList } from "../../src/components/Promo";

export default function Promo() {
  return (
    <Container>
      <Head>
        <title>Promo</title>
      </Head>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            title: "Promo",
          },
        ]}
        title="Promo"
      />
      <PromoParent>
        <PromoList title="Promo Idul Fitri" time="12 April 2021" />
        <PromoList title="Promo Tahun Baru" time="01 Januari 2021" />
        <PromoList title="Promo Opening" time="12 Desember 2020" />
      </PromoParent>
    </Container>
  );
}
