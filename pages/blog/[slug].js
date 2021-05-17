import moment from "moment";
import Head from "next/head";
import Image from "next/image";
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
    detail = (await service.get(`/blog/slug/${slug}`)).data.success.data;
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

export default function BlogDetail({ detail }) {
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
            href: "/blog",
            title: "Blog",
          },
          {
            title: detail.title,
          },
        ]}
        title={detail.title}
      />
      <BaseCard className="mb-16">
        <div className="mb-5 pb-5 border-b border-grayscale-200">
          <span className="roboto text-grayscale-700">
            {moment(detail.createdAt).locale("id").format("dddd, DD MMMM YYYY")}
          </span>
        </div>
        <div
          className="mt-5 noreset"
          dangerouslySetInnerHTML={{ __html: detail.body }}
        ></div>
      </BaseCard>
    </Container>
  );
}
