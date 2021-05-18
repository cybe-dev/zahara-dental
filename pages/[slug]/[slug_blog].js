import moment from "moment";
import Head from "next/head";
import BaseCard from "../../src/components/BaseCard";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const { slug, slug_blog } = context.params;
  let detail, basicInformation, categoryList;
  try {
    categoryList = (await service.get("/blog/category?notnull=1")).data.success
      .data;
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
    detail = (await service.get(`/blog/slug/${slug_blog}`)).data.success.data;
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

  if (!detail.category || detail.category?.slug !== slug) {
    return {
      props: {
        status: 404,
      },
    };
  }

  return {
    props: {
      basicInformation,
      detail,
      categoryList,
      blogPage: true,
      metaTag: [
        {
          name: "description",
          content: detail.body.replace(/<\/?[^>]+(>|$)/gm, "").substr(0, 150),
        },
      ],
    },
  };
};

export default function BlogDetail({ detail, basicInformation }) {
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
          {
            href: "/blog",
            title: "Blog",
          },
          {
            href: `/${detail.category.slug}`,
            title: detail.category.name,
          },
        ]}
        title={detail.title}
      />
      <BaseCard className="mb-16">
        <div className="mb-5 pb-5 border-b border-grayscale-200">
          <h2 className="roboto text-grayscale-700 text-sm lg:text-base">
            {moment(detail.createdAt).locale("id").format("dddd, DD MMMM YYYY")}
          </h2>
        </div>
        <div
          className="mt-5 noreset"
          dangerouslySetInnerHTML={{ __html: detail.body }}
        ></div>
      </BaseCard>
    </Container>
  );
}
