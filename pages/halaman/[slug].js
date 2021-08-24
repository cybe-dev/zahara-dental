import Head from "next/head";
import BaseCard from "../../src/components/BaseCard";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  let detail, basicInformation, services, subServices;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    services = (await service.get("/post/layanan?limit=100&nodesc=1")).data
      .success.data.rows;
    subServices = (await service.get("/post/sub-layanan?limit=100&nodesc=1"))
      .data.success.data.rows;
  } catch (e) {
    return {
      props: {
        status: 500,
      },
    };
  }

  try {
    detail = (await service.get(`/post/slug/${slug}`)).data.success.data;
  } catch (e) {
    if (e.response?.status === 404) {
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
      detail,
      services,
      subServices,
      metaTag: [
        {
          name: "description",
          content: detail.text.replace(/<\/?[^>]+(>|$)/gm, "").substr(0, 150),
        },
      ],
    },
  };
};

export default function PageDetail({ detail, basicInformation }) {
  return (
    <Container>
      <Head>
        <title>
          {detail.title} - {basicInformation.clinicName}
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
        title={detail.title}
      />
      <BaseCard
        className="mb-16 noreset"
        dangerouslySetInnerHTML={{ __html: detail.text }}
      />
    </Container>
  );
}
