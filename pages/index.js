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

export const getServerSideProps = async () => {
  let basicInformation, kelebihan, services, gallery, pages;
  try {
    basicInformation = (await service.get("/basic-information")).data.success
      .data;
    kelebihan = (await service.get("/post/kelebihan")).data.success.data.rows;
    services = (await service.get("/post/layanan?limit=100&nodesc=1")).data
      .success.data.rows;
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
      gallery,
      pages,
      headerProps: {
        transparentFirst: true,
        h1: true,
      },
      metaTag: [
        {
          name: "description",
          content: basicInformation.description.substr(0, 150),
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
}) {
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
          <div className="lg:w-2/5">
            <Welcome className="text-primary-100 mb-5 w-4/5 md:w-1/3 lg:w-2/3 mx-auto lg:mx-0" />
            <div className="font-bold text-xl lg:text-2xl xl:text-3xl poppins mb-3 text-center lg:text-left text-grayscale-800">
              Selamat Datang!
            </div>
            <div className="text-grayscale-700 text-center lg:text-left">
              {basicInformation.welcomeText}
            </div>
          </div>
          <div className="absolute right-0 z-10 top-0 bottom-0 items-center pt-16 hidden lg:flex">
            <div className="lg:p-2 xl:p-5 bg-grayscale-100 shadow-lg rounded-lg">
              <Image
                src="/images/dentist.jpg"
                alt="Dental Care"
                width={240}
                height={320}
                className="rounded-lg"
                objectFit="cover"
              />
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
            {kelebihan?.map((item, index) => (
              <WhyChooseList
                key={`${index}`}
                icon={IconCentre[item.thumbnail || "default"]}
                title={item.title}
              >
                {item.text}
              </WhyChooseList>
            ))}
          </WhyChooseContainer>
        </Container>
      </div>
      <div className="py-16">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300">
            Layanan
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
      <div className="relative bg-grayscale-100 border-t border-grayscale-200">
        <Container className="z-10 relative flex flex-col lg:flex-row lg:justify-between py-20 px-3 lg:px-0">
          <div className="lg:w-1/3 lg:mr-16">
            <div className="h-16 w-full relative">
              <Image
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
            <h2 className="text-grayscale-700 text-justify mt-5">
              {basicInformation.description}
            </h2>
          </div>
          <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
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
          <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
            <h4 className="text-primary-400 poppins font-bold">
              Jam Operasional
            </h4>
            <div className="arimo mt-3 text-grayscale-800 flex flex-col">
              <strong className="font-bold">
                {basicInformation.operationalDay}
              </strong>
              <span>{basicInformation.operationalHour}</span>
            </div>
            <div className="arimo mt-3 lg:w-64 flex flex-col">
              <strong className="text-grayscale-800 font-bold">Alamat</strong>
              <span className="text-grayscale-700 flex-1">
                {basicInformation?.address}
              </span>
            </div>
          </div>
          <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
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
