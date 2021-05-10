import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";
import ServiceContainer, { ServiceList } from "../../src/components/Service";
import DentIcon1 from "../../src/images/Dent-Icon-1";

export default function Service() {
  return (
    <Container>
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
        <ServiceList icon={DentIcon1} name="Veneer" />
        <ServiceList icon={DentIcon1} name="Root Canal" />
        <ServiceList icon={DentIcon1} name="Operasi Impaksi" />
        <ServiceList icon={DentIcon1} name="Orthodontic" />
        <ServiceList icon={DentIcon1} name="Bleaching" />
        <ServiceList icon={DentIcon1} name="Scaling" />
        <ServiceList icon={DentIcon1} name="Tambal Gigi" />
        <ServiceList icon={DentIcon1} name="Cabut Gigi" />
        <ServiceList icon={DentIcon1} name="Dental Crown" />
        <ServiceList icon={DentIcon1} name="Fissure Sealant" />
        <ServiceList icon={DentIcon1} name="Dental Implant" />
        <ServiceList icon={DentIcon1} name="Dental Spa" />
      </ServiceContainer>
    </Container>
  );
}
