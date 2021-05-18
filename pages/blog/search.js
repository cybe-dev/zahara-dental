import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import NotFound from "../../src/components/NotFound";
import Pagination from "../../src/components/Pagination";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  const limit = 12;
  const { q = "", page = 1 } = context.query || {};
  const offset = (parseInt(page) - 1) * limit;

  if (Number.isNaN(offset)) {
    return {
      props: {
        status: 404,
      },
    };
  }

  let blog, basicInformation, categoryList, count;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    categoryList = (await service.get("/blog/category?notnull=1")).data.success
      .data;
    const getBlog = (
      await service.get("/blog", { params: { offset, limit, q } })
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
      limit,
      count,
      blogPage: true,
      categoryList,
      q,
      page,
      metaTag: [
        {
          name: "description",
          content: `Hasil pencarian artikel dengan kata kunci "${q}"`,
        },
      ],
    },
  };
};

export default function Search({
  blog,
  basicInformation,
  q,
  page,
  limit,
  count,
}) {
  return (
    <Container>
      <Head>
        <title>
          Hasil Pencarian "{q}" / {page} - {basicInformation.clinicName}
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
        ]}
        title="Hasil Pencarian"
      />
      {blog.length && (
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
              now={parseInt(page)}
              total={Math.ceil(count / limit)}
              prefix={"/blog/search?q=" + q + "&page="}
            />
          )}
        </>
      )}
      {blog.length === 0 && <NotFound />}
    </Container>
  );
}
