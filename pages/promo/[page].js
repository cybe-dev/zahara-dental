import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import Pagination from "../../src/components/Pagination";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const { page } = context.params;
  const limit = 12;
  const offset = (parseInt(page) - 1) * limit;
  let promo, basicInformation, count, services, subServices;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    services = (await service.get("/post/layanan?limit=100&nodesc=1")).data
      .success.data.rows;
    subServices = (await service.get("/post/sub-layanan?limit=100&nodesc=1"))
      .data.success.data.rows;
    const getPromo = (
      await service.get("/post/promo", { params: { offset, limit } })
    ).data.success.data;
    promo = getPromo.rows;
    count = getPromo.count;
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

  if (promo.length === 0) {
    return {
      props: {
        status: 404,
      },
    };
  }

  return {
    props: {
      basicInformation,
      promo,
      page,
      count,
      limit,
      services,
      subServices,
      metaTag: [
        {
          name: "description",
          content: `Kumpulan promo-promo menarik dari klinik ${basicInformation.clinicName}`,
        },
      ],
    },
  };
};

export default function Promo({ promo, page, basicInformation, count, limit }) {
  const router = useRouter();
  return (
    <Container>
      <Head>
        <title>
          Promo / Halaman : {page} - {basicInformation.clinicName}
        </title>
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
          now={parseInt(page)}
          total={Math.ceil(count / limit)}
          prefix="/promo/"
        />
      )}
    </Container>
  );
}
