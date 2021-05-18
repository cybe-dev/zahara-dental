import Head from "next/head";
import Image from "next/image";
import Masonry from "react-masonry-css";
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
      metaTag: [
        {
          name: "description",
          content: detail.text.substr(0, 150),
        },
      ],
    },
  };
};

export default function ServiceDetail({ detail, basicInformation }) {
  return (
    <Container className="mb-8">
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
            href: "/layanan",
            title: "Layanan",
          },
        ]}
        title={detail.title}
      />
      <BaseCard className="mb-8">{detail.text}</BaseCard>
      <Masonry
        breakpointCols={{
          default: 3,
          768: 2,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {detail.pictures?.map((item, index) => (
          <div className="w-full image-container" key={`${index}`}>
            <Image
              src={item.path.replace(
                "public",
                process.env.NEXT_PUBLIC_BASE_URL
              )}
              alt={"Gambar " + detail.title}
              layout="fill"
              quality={5}
              className="image rounded-md"
            />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
