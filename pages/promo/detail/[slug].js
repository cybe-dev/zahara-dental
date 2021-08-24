import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import BaseCard from "../../../src/components/BaseCard";
import Container from "../../../src/components/Container";
import HeadingPage from "../../../src/components/HeadingPage";
import service from "../../../src/service";

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

  return {
    props: {
      basicInformation,
      detail,
      services,
      subServices,
      metaTag: [
        {
          name: "description",
          content: detail.text.replace(/<\/?[^>]+(>|$)/gm, "").substr(0, 150),
        },
      ],
    },
  };
};

export default function PromoDetail({ detail, basicInformation }) {
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
            href: "/promo",
            title: "Promo",
          },
        ]}
        title={detail.title}
      />
      <BaseCard className="mb-16">
        <div className="mb-5 pb-5 border-b border-grayscale-200">
          <h2 className="roboto text-grayscale-700">
            {moment(detail.createdAt).locale("id").format("dddd, DD MMMM YYYY")}
          </h2>
        </div>
        {detail.thumbnail && (
          <div className="lg:w-2/3 mx-auto">
            <div className="image-container relative">
              <Image
                unoptimized={true}
                alt={detail.title}
                src={detail.thumbnail?.replace(
                  "public",
                  process.env.NEXT_PUBLIC_BASE_URL
                )}
                layout="fill"
                objectFit="contain"
                className="image"
              />
            </div>
          </div>
        )}
        <div
          className="mt-5 noreset"
          dangerouslySetInnerHTML={{ __html: detail.text }}
        ></div>
      </BaseCard>
    </Container>
  );
}
