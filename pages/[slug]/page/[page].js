import Head from "next/head";
import Container from "../../../src/components/Container";
import HeadingPage from "../../../src/components/HeadingPage";
import {
  default as PromoParent,
  PromoList,
} from "../../../src/components/Promo";
import service from "../../../src/service";

export const getServerSideProps = async (context) => {
  const { page } = context.params;
  const limit = 12;
  const offset = (parseInt(page) - 1) * limit;

  if (Number.isNaN(offset)) {
    return {
      props: {
        status: 404,
      },
    };
  }
  let blog, basicInformation, categoryList, categoryName, count;
  const { slug } = context.params;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    categoryList = (await service.get("/blog/category?notnull=1")).data.success
      .data;
    const categoryId = categoryList?.find(
      (predicate) => predicate.slug === slug
    );
    const getBlog = (
      await service.get(`/blog?category=${categoryId.id}`, {
        params: { offset, limit },
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

  if (blog.length === 0) {
    return {
      props: {
        status: 404,
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
      page,
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
  page,
  basicInformation,
  slug,
  count,
  limit,
}) {
  return (
    <Container>
      <Head>
        <title>
          {categoryName} / {page} - {basicInformation.clinicName}
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
          prefix={`/${slug}/page/`}
        />
      )}
    </Container>
  );
}
