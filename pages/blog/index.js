import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import NotFound from "../../src/components/NotFound";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const limit = 12;
  let blog, basicInformation, categoryList, count;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    categoryList = (await service.get("/blog/category?notnull=1")).data.success
      .data;
    const getBlog = (
      await service.get("/blog", { params: { offset: 0, limit } })
    ).data.success.data;
    blog = getBlog.rows;
    count = getBlog.count;
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
      count,
      limit,
      blogPage: true,
      categoryList,
      metaTag: [
        {
          name: "description",
          content: `Kumpulan artikel dari ${basicInformation.clinicName} yang mungkin dapat membantu`,
        },
      ],
    },
  };
};

export default function Blog({ blog, basicInformation, count, limit }) {
  return (
    <Container>
      <Head>
        <title>Blog - {basicInformation.clinicName}</title>
      </Head>
      <HeadingPage
        Heading="h1"
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
        ]}
        title="Blog"
      />
      {blog.length ? (
        <>
          <PromoParent>
            {blog?.map((item, index) => (
              <PromoList
                key={`${index}`}
                title={item.title}
                imgSource={item.thumbnail}
                time={item.createdAt}
                slug={item.slug}
                prefix={item.category ? `/${item.category.slug}` : `/blog`}
              />
            ))}
          </PromoParent>
          {Math.ceil(count / limit) > 1 && (
            <Pagination
              now={1}
              total={Math.ceil(count / limit)}
              prefix="/blog/page/"
            />
          )}
        </>
      ) : (
        <NotFound />
      )}
    </Container>
  );
}
