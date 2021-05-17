import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  let promo, basicInformation;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    promo = (
      await service.get("/post/promo", { params: { offset: 0, limit: 12 } })
    ).data.success.data.rows;
  } catch (e) {
    return {
      props: {
        status: 500,
      },
    };
  }

  return {
    props: {
      basicInformation,
      promo,
    },
  };
};

export default function Promo({ promo }) {
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
        {promo?.map((item, index) => (
          <PromoList
            key={`${index}`}
            title={item.title}
            imgSource={item.thumbnail?.replace(
              "public",
              process.env.NEXT_PUBLIC_BASE_URL
            )}
            time={item.createdAt}
            slug={item.slug}
          />
        ))}
      </PromoParent>
    </Container>
  );
}
