import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  let blog, basicInformation;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    blog = (await service.get("/blog", { params: { offset: 0, limit: 12 } }))
      .data.success.data.rows;
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
      blog,
    },
  };
};

export default function Blog({ blog }) {
  return (
    <Container>
      <Head>
        <title>Blog</title>
      </Head>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            title: "Blog",
          },
        ]}
        title="Blog"
      />
      <PromoParent>
        {blog?.map((item, index) => (
          <PromoList
            key={`${index}`}
            title={item.title}
            imgSource={""}
            time={item.createdAt}
            slug={item.slug}
            prefix="/blog"
          />
        ))}
      </PromoParent>
    </Container>
  );
}
