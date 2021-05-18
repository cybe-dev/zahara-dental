import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import NotFound from "../../src/components/NotFound";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const limit = 12;
  let promo, basicInformation;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    const getPromo = (
      await service.get("/post/promo", { params: { offset: 0, limit } })
    ).data.success.data;
    promo = getPromo.rows;
    count = getPromo.count;
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
      count,
      limit,
      metaTag: [
        {
          name: "description",
          content: `Kumpulan promo-promo menarik dari klinik ${basicInformation.clinicName}`,
        },
      ],
    },
  };
};

export default function Promo({ promo, basicInformation, count, limit }) {
  return (
    <Container>
      <Head>
        <title>Promo - {basicInformation.clinicName}</title>
      </Head>
      <HeadingPage
        Heading="h1"
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
        ]}
        title="Promo"
      />
      {promo.length ? (
        <>
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

          {Math.ceil(count / limit) > 1 && (
            <Pagination
              now={1}
              total={Math.ceil(count / limit)}
              prefix="/promo/"
            />
          )}
        </>
      ) : (
        <NotFound />
      )}
    </Container>
  );
}
