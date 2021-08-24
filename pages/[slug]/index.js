import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import NotFound from "../../src/components/NotFound";
import { default as PromoParent, PromoList } from "../../src/components/Promo";
import service from "../../src/service";

export const getServerSideProps = async (context) => {
  let blog, basicInformation, categoryList, categoryName, count;
  const limit = 12;
  const { slug } = context.params;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    categoryList = (await service.get("/blog/category?notnull=1")).data.success
      .data;
  } catch (e) {
    return {
      props: {
        status: 500,
      },
    };
  }

  const categoryId = categoryList?.find((predicate) => predicate.slug === slug);
  if (!categoryId) {
    return {
      props: {
        status: 400,
      },
    };
  }

  try {
    const getBlog = (
      await service.get(`/blog?category=${categoryId.id}`, {
        params: { offset: 0, limit },
      })
    ).data.success.data;
    blog = getBlog.rows;
    count = getBlog.count;
    categoryName = categoryId.name;
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
      slug,
      blogPage: true,
      categoryList,
      categoryName,
      metaTag: [
        {
          name: "description",
          content: `Kumpulan artikel dalam kategori ${categoryName} dari ${basicInformation.clinicName} yang mungkin dapat membantu`,
        },
      ],
    },
  };
};

export default function Blog({
  blog,
  categoryName,
  basicInformation,
  count,
  limit,
  slug,
}) {
  return (
    <Container>
      <Head>
        <title>
          {categoryName} - {basicInformation.clinicName}
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
        title={categoryName}
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
              prefix={`/${slug}/page/`}
            />
          )}
        </>
      ) : (
        <NotFound />
      )}
    </Container>
  );
}
