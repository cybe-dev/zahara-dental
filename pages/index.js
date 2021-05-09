import Background from "../src/images/Background";
import Image from "next/image";
import DentIcon1 from "../src/images/Dent-Icon-1";
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
import Logo from "../src/images/Logo";
import Facebook from "../src/images/Facebook";

export const getStaticProps = () => {
  return {
    props: {
      headerTransparentFirst: true,
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Zahara Dental Care</title>
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
            <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl poppins mb-3 text-center lg:text-left text-grayscale-800">
              Selamat Datang!
            </h1>
            <h2 className="text-grayscale-700 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque. Maecenas nunc felis,
              viverra non sem vitae, consequat mollis ante.
            </h2>
          </div>
          <div className="absolute right-0 z-10 top-0 bottom-0 items-center pt-16 hidden lg:flex">
            <div className="lg:p-2 xl:p-5 bg-grayscale-100 shadow-lg rounded-lg">
              <Image
                src="/images/dentist.jpg"
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
            <WhyChooseList icon={DentIcon1} title="Contoh Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque.
            </WhyChooseList>
            <WhyChooseList icon={DentIcon1} title="Contoh Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque.
            </WhyChooseList>
            <WhyChooseList icon={DentIcon1} title="Contoh Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque.
            </WhyChooseList>
            <WhyChooseList icon={DentIcon1} title="Contoh Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque.
            </WhyChooseList>
            <WhyChooseList icon={DentIcon1} title="Contoh Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque.
            </WhyChooseList>
            <WhyChooseList icon={DentIcon1} title="Contoh Text 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit consectetur arcu nec scelerisque.
            </WhyChooseList>
          </WhyChooseContainer>
        </Container>
      </div>
      <div className="py-16">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300">
            Layanan
          </h3>
          <ServiceContainer>
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
      </div>
      <div className="py-20 bg-grayscale-100">
        <Container>
          <h3 className="font-bold poppins text-xl lg:text-2xl text-center text-primary-300">
            Galeri
          </h3>
          <GalleryContainer>
            <GalleryList text="Bleaching" image="/images/img-1.jpg" />
            <GalleryList
              text="Perawatan Syaraf Gigi"
              image="/images/img-2.jpg"
            />
            <GalleryList text="Gigi Tiruan" image="/images/img-3.jpg" />
            <GalleryList text="Implan Gigi" image="/images/img-4.jpg" />
            <GalleryList text="Operasi Gigi Bungsu" image="/images/img-2.jpg" />
            <GalleryList text="Scaling" image="/images/img-4.jpg" />
            <GalleryList text="Penambalan Gigi" image="/images/img-1.jpg" />
            <GalleryList text="Gum Lifting" image="/images/img-3.jpg" />
          </GalleryContainer>
        </Container>
      </div>
      <div className="relative bg-grayscale-100 border-t border-grayscale-200">
        <Container className="z-10 relative flex flex-col lg:flex-row lg:justify-between py-20 px-3 lg:px-0">
          <div className="lg:w-1/3 lg:mr-16">
            <h2 className="font-bold flex items-center text-primary-200">
              <Logo width={52} height={46} />{" "}
              <div className="ml-3">
                <span
                  className="block fredoka text-xl"
                  style={{ letterSpacing: 4 }}
                >
                  ZAHARA
                </span>
                <span className="block text-grayscale-600">DENTAL CARE</span>
              </div>
            </h2>
            <div className="text-grayscale-700 text-justify mt-3">
              Kami selalu berupaya mengoptimalkan pelayanan kepada pelanggan
              dengan customer service yang sigap dan perawatan gigi yang minim
              trauma. Kami juga memberikan konsultasi gratis secara luring baik
              kepada pasien kami ataupun bukan.
            </div>
          </div>
          <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
            <h3 className="text-primary-400 poppins font-bold">Layanan</h3>
            <ul className="mt-3">
              <li>
                <a className="mt-1 block text-grayscale-700">Layanan 1</a>
              </li>
              <li>
                <a className="mt-1 block text-grayscale-700">Layanan 2</a>
              </li>
              <li>
                <a className="mt-1 block text-grayscale-700">Layanan 3</a>
              </li>
            </ul>
          </div>
          <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
            <h3 className="text-primary-400 poppins font-bold">
              Jam Operasional
            </h3>
            <div className="arimo mt-3 text-grayscale-800 flex flex-col">
              <span className="font-bold">Senin - Jum'at</span>
              <span>08.00 - 14.00 & 17.00 - 21.00</span>
            </div>
          </div>
          <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
            <h3 className="text-primary-400 poppins font-bold">Ikuti Kami</h3>
            <div className="mt-3 flex">
              <SocialMediaButton
                icon={Instagram}
                target="_blank"
                href="https://instagram.com/zaharadentalcare"
              />
              <SocialMediaButton
                icon={Facebook}
                target="_blank"
                className="ml-2"
                href="https://facebook.com/zaharaklinikgigi"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
