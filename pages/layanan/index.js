import Head from "next/head";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import ServiceContainer, { ServiceList } from "../../src/components/Service";
import IconCentre from "../../src/images/IconCentre";
import service from "../../src/service";

export const getServerSideProps = async () => {
  let services, basicInformation;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    services = (await service.get("/post/layanan?limit=100&nodesc=1")).data
      .success.data.rows;
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
    },
  };
};

export default function Service({ services }) {
  return (
    <Container>
      <Head>
        <title>Layanan</title>
      </Head>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            title: "Layanan",
          },
        ]}
        title="Layanan"
      />
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
    </Container>
  );
}
