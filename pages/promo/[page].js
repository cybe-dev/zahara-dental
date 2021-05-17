import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const { page } = context.params;
  const offset = (parseInt(page) - 1) * 12;
  let promo, basicInformation;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    promo = (
      await service.get("/post/promo", { params: { offset, limit: 12 } })
    ).data.success.data.rows;
  } catch (e) {
    if (Number.isNaN(offset)) {
      return {
        props: {
          status: 404,
        },
      };
    }
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
      page,
    },
  };
};

export default function Promo({ promo, page }) {
  return (
    <Container>
      <Head>
        <title>Promo / Halaman : {page}</title>
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
