import BaseCard from "../../src/components/BaseCard";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";

export default function PromoDetail() {
  return (
    <Container>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            href: "/promo",
            title: "Promo",
          },
          {
            title: "Detail",
          },
        ]}
        title="Detail"
      />
      <BaseCard className="mb-16">
        <div className="mb-5 pb-5 border-b border-grayscale-200">
          <span className="roboto text-grayscale-700">
            Senin, 12 April 2021
          </span>
        </div>
      </BaseCard>
    </Container>
  );
}
