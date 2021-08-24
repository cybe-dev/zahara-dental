import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Masonry from "react-masonry-css";
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

  const subs = [];
  for (let sub of subServices) {
    if (sub.thumbnail === `${detail.id}`) {
      subs.push(sub);
    }
  }

  return {
    props: {
      basicInformation,
      detail,
      services,
      subs,
      subServices,
      metaTag: [
        {
          name: "description",
          content: detail.text.substr(0, 150),
        },
      ],
    },
  };
};

export default function ServiceDetail({ detail, basicInformation, subs }) {
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
      <BaseCard className="mb-8 noreset">
        <p>{detail.text}</p>
        {subs.length > 0 && (
          <Fragment>
            <p>
              Jenis layanan <b>{detail.title}</b> yang tersedia di{" "}
              <b>{basicInformation.clinicName}</b>:
            </p>
            <ul>
              {subs.map((item, index) => (
                <li key={`${index}`} id={`#${item.slug}`}>
                  {item.title}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </BaseCard>
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
              unoptimized={true}
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
