import Background from "../src/images/Background";
import Image from "next/image";
import DentIcon1 from "../src/images/Dent-Icon-1";
import { theme } from "../tailwind.config";
import Container from "../src/components/Container";
import WhyChooseContainer, { WhyChooseList } from "../src/components/WhyChoose";
import BackgroundMobile from "../src/images/BackgroundMobile";
import Welcome from "../src/images/Welcome";
import ServiceContainer, { ServiceList } from "../src/components/Service";
import GalleryContainer, { GalleryList } from "../src/components/Gallery";

export default function Home() {
  return (
    <>
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
                src="/dentist.jpg"
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
            <GalleryList text="Bleaching" />
            <GalleryList text="Perawatan Syaraf Gigi" />
            <GalleryList text="Gigi Tiruan" />
            <GalleryList text="Implan Gigi" />
            <GalleryList text="Operasi Gigi Bungsu" />
            <GalleryList text="Scaling" />
            <GalleryList text="Penambalan Gigi" />
            <GalleryList text="Gum Lifting" />
          </GalleryContainer>
        </Container>
      </div>
      <div className="relative bg-grayscale-100 border-t border-grayscale-200">
        <Container className="z-10 relative flex flex-col lg:flex-row py-20 px-3 lg:px-0">
          <div className="lg:w-2/4 flex-1 lg:mr-16">
            <h2 className="font-bold text-xl text-primary-200">
              Zahara Dental
            </h2>
            <div className="text-grayscale-700 text-justify mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              interdum dignissim quam, at varius odio lobortis ut. Aenean nisl
              enim, egestas in lorem sed, fermentum fermentum erat. Vivamus nisl
              metus, tempus eu metus eget, semper pellentesque erat. Aliquam
              sagittis mi vel velit consequat maximus.
            </div>
          </div>
          <div className="lg:w-1/5 ml-0 lg:ml-5 mt-8 lg:mt-0">
            <h3 className="text-primary-400 poppins font-bold">Halaman</h3>
            <ul className="mt-3">
              <li>
                <a className="mt-1 block text-grayscale-700">Profil Klinik</a>
              </li>
              <li>
                <a className="mt-1 block text-grayscale-700">Jadwal Praktek</a>
              </li>
              <li>
                <a className="mt-1 block text-grayscale-700">Harga</a>
              </li>
              <li>
                <a className="mt-1 block text-grayscale-700">Testimoni</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/5 ml-0 lg:ml-5 mt-8 lg:mt-0">
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
        </Container>
      </div>
    </>
  );
}
