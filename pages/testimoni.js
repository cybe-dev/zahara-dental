import Head from "next/head";
import Container from "../src/components/Container";
import HeadingPage from "../src/components/HeadingPage";
import NotFound from "../src/components/NotFound";
import * as TestimoniComponent from "../src/components/Testimoni";
import service from "../src/service";

export const getServerSideProps = async () => {
  let basicInformation, testimoni;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    testimoni = (await service.get("/post/testimoni")).data.success.data.rows;
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
      testimoni,
      metaTag: [
        {
          name: "description",
          content: `Apa kata mereka yang pernah melakukan perawatan di ${basicInformation.clinicName}`,
        },
      ],
    },
  };
};

export default function Testimoni({ testimoni, basicInformation }) {
  return (
    <Container>
      <Head>
        <title>Testimoni - {basicInformation.clinicName}</title>
      </Head>
      <HeadingPage
        Heading="h1"
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
        ]}
        title="Testimoni"
      />
      {testimoni.length && (
        <TestimoniComponent.default>
          {testimoni?.map((item, index) => {
            const splitName = item.title?.split("-");
            const name = splitName[0].trim();
            const title = splitName[1]?.trim() || "";
            return (
              <TestimoniComponent.TestimoniList
                name={name}
                key={`${index}`}
                title={title}
                pic={item.thumbnail?.replace(
                  "public",
                  process.env.NEXT_PUBLIC_BASE_URL
                )}
              >
                {item.text}
              </TestimoniComponent.TestimoniList>
            );
          })}
        </TestimoniComponent.default>
      )}
      {testimoni.length === 0 && <NotFound />}
    </Container>
  );
}
