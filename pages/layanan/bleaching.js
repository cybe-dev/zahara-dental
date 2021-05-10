import Image from "next/image";
import Masonry from "react-masonry-css";
import BaseCard from "../../src/components/BaseCard";
import Container from "../../src/components/Container";
import HeadingPage from "../../src/components/HeadingPage";

export default function ServiceDetail() {
  return (
    <Container className="mb-8">
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            href: "/layanan",
            title: "Layanan",
          },
          {
            title: "Bleaching",
          },
        ]}
        title="Bleaching"
      />
      <BaseCard className="mb-8">
        Bleaching treatment merupakan perawatan untuk memulihkan kembali warna
        gigi hingga mendekati warna gigi asli. Prosedur perawatan yang relative
        cepat dengan hasil yang optimal serta sangat efektif untuk meningkatkan
        penampilan seseorang.
      </BaseCard>
      <Masonry
        breakpointCols={{
          default: 3,
          768: 2,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="w-full image-container">
          <Image
            src="/images/dentist.jpg"
            layout="fill"
            className="image rounded-md"
          />
        </div>
        <div className="bg-grayscale-300 h-32 w-full"></div>
        <div className="bg-grayscale-300 h-44 w-full"></div>
        <div className="bg-grayscale-300 h-32 w-full"></div>
        <div className="bg-grayscale-300 h-44 w-full"></div>
        <div className="bg-grayscale-300 h-64 w-full"></div>
      </Masonry>
    </Container>
  );
}
