import Background from "../src/images/Background";
import Image from "next/image";
import { theme } from "../tailwind.config";
import Container from "../src/components/Container";
import SocialMediaButton from "../src/components/SocialMediaButton";
import WhyChooseContainer, { WhyChooseList } from "../src/components/WhyChoose";
import BackgroundMobile from "../src/images/BackgroundMobile";
import Welcome from "../src/images/Welcome";
import ServiceContainer, { ServiceList } from "../src/components/Service";
import GalleryContainer, { GalleryList } from "../src/components/Gallery";
import Head from "next/head";
import Instagram from "../src/images/Instagram";
import Facebook from "../src/images/Facebook";
import IconCentre from "../src/images/IconCentre";
import Link from "next/link";
import service from "../src/service";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRef } from "react";
import Embed from "../src/components/Embed";

export const getServerSideProps = async () => {
  let basicInformation,
    kelebihan,
    services,
    subServices,
    gallery,
    pages,
    slider;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    services = (await service.get("/post/layanan?limit=100")).data.success.data
      .rows;
    subServices = (await service.get("/post/sub-layanan?limit=100&nodesc=1"))
      .data.success.data.rows;
    kelebihan = (await service.get("/post/kelebihan")).data.success.data.rows;
    slider = (await service.get("/post/slider")).data.success.data.rows;
    pages = (await service.get("/post/halaman?limit=100&nodesc=1")).data.success
      .data.rows;
    gallery = (await service.get("/gallery/type/layanan?limit=8")).data.success
      .data.rows;
  } catch (e) {
    console.log(e);
    return {
      props: {
        status: 500,
      },
    };
  }
  return {
    props: {
      basicInformation,
      kelebihan,
      services,
      subServices,
      gallery,
      pages,
      headerProps: {
        transparentFirst: true,
      },
      slider,
      metaTag: [
        {
          name: "description",
          content: basicInformation.description?.substr(0, 150) || "",
        },
      ],
    },
  };
};

export default function Home({
  basicInformation,
  kelebihan,
  services,
  gallery,
  pages,
  slider,
}) {
  const counter = useRef(0);
  return (
    <>
      <Head>
        <title>{basicInformation.clinicName}</title>
      </Head>
      <Background
        className="h-screen w-full absolute top-0 left-0 z-0 bg-grayscale-100 hidden lg:block"
        fill={theme.colors.background}
      />
      <BackgroundMobile
        className="h-screen w-full absolute top-0 left-0 z-0 bg-grayscale-100 block lg:hidden"
        fill={theme.colors.background}
      />
      <div className="h-screen relative">
        <Container className="text-grayscale-800 z-10 flex items-center h-full relative">
          <div className="lg:w-1/2">
            <Welcome className="text-primary-100 mb-5 w-1/2 md:w-1/3 lg:w-2/4 mx-auto lg:mx-0 h-auto" />
            <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl poppins mb-3 text-center lg:text-left text-grayscale-800">
              Selamat Datang!
            </h1>
            <h2 className="text-grayscale-700 text-center lg:text-left">
              {basicInformation.welcomeText}
            </h2>
          </div>
          <div className="absolute right-0 z-10 top-0 bottom-0 items-center pt-16 hidden lg:flex w-64">
            <div className="lg:p-2 xl:p-5 bg-grayscale-100 shadow-lg rounded-lg">
              <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                swipeable={true}
                showArrows={false}
              >
                {slider?.map((item, index) => (
                  <div key={`${index}`}>
                    <Image
                      unoptimized={true}
                      src={
                        item.thumbnail?.replace(
                          "public",
                          process.env.NEXT_PUBLIC_BASE_URL
                        ) || "/images/dentist.jpg"
                      }
                      alt={item.title}
                      width={240}
                      height={320}
                      className="rounded-lg"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-grayscale-100 py-10">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300">
            Mengapa Memilih Klinik Kami?
          </h3>
          <WhyChooseContainer>
            {kelebihan?.map((item, index) => {
              if (counter.current + 1 > 4) {
                counter.current = 1;
              } else {
                counter.current = counter.current + 1;
              }
              return (
                <WhyChooseList
                  key={`${index}`}
                  icon={IconCentre[item.thumbnail || "default"]}
                  title={item.title}
                  right={counter.current > 2}
                >
                  {item.text}
                </WhyChooseList>
              );
            })}
          </WhyChooseContainer>
        </Container>
      </div>
      <div className="py-16">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300">
            Our Services
          </h3>
          <ServiceContainer className="mt-16">
            {services?.map((item, index) => (
              <ServiceList
                key={`${index}`}
                icon={IconCentre[item.thumbnail || "default"]}
                name={item.title}
                slug={item.slug}
              />
            ))}
          </ServiceContainer>
        </Container>
      </div>
      <div className="py-20 bg-grayscale-100">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300">
            Galeri
          </h3>
          <GalleryContainer>
            {gallery?.map((item, index) => (
              <GalleryList
                key={`${index}`}
                slug={item.post.slug}
                text={item.post.title}
                image={item.path?.replace(
                  "public",
                  process.env.NEXT_PUBLIC_BASE_URL
                )}
              />
            ))}
          </GalleryContainer>
        </Container>
      </div>
      <div className="relative bg-grayscale-100 border-t border-grayscale-200 py-20">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300 mb-10">
            Instagram Feeds
          </h3>
          <Embed refId="cf0cdc21292e428a3a654fb046cb71e6958030a8" />
        </Container>
      </div>
      <div className="relative bg-grayscale-100 border-t border-grayscale-200">
        <Container className="z-10 relative flex flex-col lg:flex-row lg:justify-between py-20 px-3 lg:px-0">
          <div className="lg:w-1/3 lg:mr-16">
            <div className="h-16 w-full relative">
              <Image
                unoptimized={true}
                src={basicInformation?.logo?.replace(
                  "public",
                  process.env.NEXT_PUBLIC_BASE_URL
                )}
                alt={`Logo ${basicInformation.clinicName}`}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                quality={90}
              />
            </div>
            <div className="text-grayscale-700 text-justify mt-5">
              {basicInformation.description}
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.551458567118!2d104.7828726!3d-2.9443187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b77a7c616c2c7%3A0x78ffdbd1be2a42f8!2sZahara%20Dental%20Care!5e0!3m2!1sid!2sid!4v1628881642342!5m2!1sid!2sid"
              className="w-full h-64 lg:h-full"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </Container>
      </div>
      <div className="relative bg-grayscale-100 border-t border-grayscale-200">
        <Container className="flex flex-col lg:flex-row py-20">
          <div>
            <h4 className="text-primary-400 poppins font-bold">Halaman</h4>
            <ul className="mt-3">
              {pages?.map((item, index) => (
                <li key={`${index}`}>
                  <Link href={`/halaman/${item.slug}`}>
                    <a
                      className="mt-1 block text-grayscale-700 hover:text-primary-100"
                      title={item.title}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-0 lg:ml-12 mt-8 lg:mt-0">
            <h4 className="text-primary-400 poppins font-bold">
              Jam Operasional
            </h4>
            <div className="arimo mt-3 text-grayscale-800 flex flex-col">
              <strong className="font-bold">
                {basicInformation.operationalDay}
              </strong>
              <span>{basicInformation.operationalHour}</span>
            </div>
            <div className="arimo mt-3 lg:w-80 flex flex-col">
              <strong className="text-grayscale-800 font-bold">Alamat</strong>
              <span className="text-grayscale-700 flex-1">
                {basicInformation?.address} <br />
                <a
                  href={basicInformation.gmaps}
                  title={`Google Maps ${basicInformation.clinicName}`}
                  className="text-primary-200"
                >
                  Lihat Maps
                </a>
              </span>
            </div>
          </div>
          <div className="ml-0 lg:ml-12 mt-8 lg:mt-0">
            <h4 className="text-primary-400 poppins font-bold">Ikuti Kami</h4>
            <div className="mt-3 flex">
              <SocialMediaButton
                title={`Instagram ${basicInformation.clinicName}`}
                icon={Instagram}
                target="_blank"
                href={basicInformation.instagram}
              />
              <SocialMediaButton
                title={`Facebook ${basicInformation.clinicName}`}
                icon={Facebook}
                target="_blank"
                className="ml-2"
                href={basicInformation.facebook}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
