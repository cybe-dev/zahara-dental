import Head from "next/head";
import BaseCard from "../../src/components/BaseCard";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  let detail, basicInformation;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
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
    },
  };
};

export default function PageDetail({ detail }) {
  return (
    <Container>
      <Head>
        <title>{detail.title}</title>
      </Head>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            title: detail.title,
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
