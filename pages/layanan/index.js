import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import NotFound from "../../src/components/NotFound";
import ServiceContainer, { ServiceList } from "../../src/components/Service";
import IconCentre from "../../src/images/IconCentre";
import service from "../../src/service";

export const getServerSideProps = async () => {
  let services, basicInformation, subServices;
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

  return {
    props: {
      basicInformation,
      services,
      subServices,
      metaTag: [
        {
          name: "description",
          content: `Daftar layanan atau perawatan yang tersedia di ${basicInformation.clinicName}`,
        },
      ],
    },
  };
};

export default function Service({ services, basicInformation }) {
  return (
    <Container>
      <Head>
        <title>Layanan - {basicInformation.clinicName}</title>
      </Head>
      <HeadingPage
        Heading="h1"
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
        ]}
        title="Layanan"
      />
      {services.length ? (
        <ServiceContainer className="mb-16">
          {services?.map((item, index) => (
            <ServiceList
              icon={IconCentre[item.thumbnail || "default"]}
              name={item.title}
              slug={item.slug}
              key={`${index}`}
            />
          ))}
        </ServiceContainer>
      ) : (
        <NotFound />
      )}
    </Container>
  );
}
