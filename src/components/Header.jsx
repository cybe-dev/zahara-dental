import { useEffect, useRef, useState } from "react";
import Menu from "../images/Menu";
import Container from "./Container";
import { theme } from "../../tailwind.config";
import Close from "../images/Close";
import Down from "../images/Down";
import Schedule from "../images/Schedule";
import Link from "next/link";
import { useWeb } from "../context/web-interface";
import Image from "next/image";

const NavbarList = ({ href, children, onClick, ...props }) => (
  <li onClick={onClick}>
    <Link href={href}>
      <a title={children} {...props}>
        {children}
      </a>
    </Link>
  </li>
);

const NavbarListSubDropdown = ({ children, onClick, dropdown, ...props }) => {
  const [hovering, setHovering] = useState(true);
  return (
    <li
      className="relative group overflow-hidden hover:overflow-visible cursor-pointer lg:group-hover:px-3"
      onClick={() => {
        setHovering((value) => !value);
      }}
    >
      <span className="block pr-4 relative" href="#">
        {children}
        <Down
          width="0.5rem"
          height="0.5rem"
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
          fill={theme.colors.grayscale[600]}
        />
      </span>
      <ul
        className={
          hovering
            ? "hidden lg:block px-0 lg:group-hover:py-2 lg:group-hover:px-3 pl-3 lg:pl-0 lg:absolute top-0 left-full lg:w-0 lg:group-hover:w-64 bg-grayscale-100 lg:shadow rounded"
            : "block  px-0 lg:group-hover:py-2 lg:group-hover:px-3 pl-3 lg:pl-0 lg:absolute top-0 left-full lg:w-0 lg:group-hover:w-64 bg-grayscale-100 lg:shadow rounded"
        }
      >
        {dropdown.map((item, index) => (
          <li key={`${index}`} onClick={onClick}>
            <Link href={item.href}>
              <a title={item.title} {...props}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const NavbarListDropdown = ({ children, onClick, dropdown, ...props }) => (
  <li className="relative group">
    <span className="block pr-4 relative" href="#">
      {children}
      <Down
        width="0.5rem"
        height="0.5rem"
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        fill={theme.colors.grayscale[600]}
      />
    </span>
    <ul className="hidden group-hover:block lg:block lg:group-hover:py-2 w-0 group-hover:w-full lg:group-hover:w-64 transform -translate-y-5 group-hover:translate-y-0 lg:absolute top-full bg-grayscale-100 pl-3 mb-3 lg:mb-0 lg:pl-0 rounded lg:shadow transition-transform duration-500">
      {dropdown.map((item, index) =>
        item.sub ? (
          <NavbarListSubDropdown
            dropdown={item.dropdown}
            onClick={onClick}
            key={`${index}`}
          >
            {item.sub}
          </NavbarListSubDropdown>
        ) : (
          <li
            key={`${index}`}
            onClick={onClick}
            className="overflow-hidden lg:group-hover:px-3"
          >
            <Link href={item.href}>
              <a title={item.title} {...props}>
                {item.title}
              </a>
            </Link>
          </li>
        )
      )}
    </ul>
  </li>
);

export default function Header({
  transparentFirst = false,
  h1 = false,
  services = [],
  subServices = [],
}) {
  const [transparent, setTransparent] = useState(transparentFirst);
  const [offsetY, setOffsetY] = useState(0);
  const [navbarShown, setNavbarShown] = useState(false);
  const HeadComponent = h1 ? "h1" : "div";
  const {
    state: { basicInformation },
  } = useWeb();
  const mounted = useRef(false);

  const [dropdown, setDropdown] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const service of services) {
      temp.push({
        id: `${service.id}`,
        title: service.title,
        href: "/layanan/" + service.slug,
      });
    }

    for (const sub of subServices) {
      const check = temp.findIndex((item, index) => item.id === sub.thumbnail);
      if (check >= 0) {
        const data = temp[check];
        if (data.sub) {
          const tempDrop = [...data.dropdown];
          tempDrop.push({
            title: sub.title,
            href: data.href + "#" + sub.slug,
          });
          temp[check].dropdown = tempDrop;
        } else {
          temp[check] = {
            id: data.id,
            sub: data.title,
            href: data.href,
            dropdown: [
              {
                title: sub.title,
                href: data.href + "#" + sub.slug,
              },
            ],
          };
        }
      }
    }

    setDropdown(temp);
  }, [services, subServices]);

  useEffect(() => {
    if (mounted.current) {
      if (offsetY > 0 || !transparentFirst) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    }
  }, [offsetY, transparentFirst]);

  useEffect(() => {
    mounted.current = true;
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
    return () => {
      window.onscroll = undefined;
      mounted.current = false;
    };
  }, []);
  return (
    <>
      <div
        className={
          transparent
            ? "h-16 lg:h-20 bg-transparent fixed z-20 w-full duration-300 transition-all"
            : "h-16 lg:h-20 bg-grayscale-100 fixed z-20 w-full duration-300 transition-all shadow-md"
        }
      >
        <Container className="flex justify-between items-center h-full">
          <button
            type="button"
            onClick={() => {
              setNavbarShown(true);
            }}
            className="block lg:hidden"
          >
            <Menu width={24} height={24} fill={theme.colors.grayscale[800]} />
          </button>
          <div
            className={
              transparent
                ? "opacity-0 lg:opacity-100 w-1/3 lg:w-1/5 transition-all duration-500 lg:mr-3"
                : "opacity-100 lg:opacity-100 w-1/3 lg:w-1/5 transition-all duration-500 lg:mr-3"
            }
          >
            <HeadComponent>
              <Link href="/">
                <a
                  className="font-bold text-primary-100 flex items-center h-10 lg:h-12 mb-1 w-full relative"
                  title={basicInformation.clinicName}
                >
                  <Image
                    unoptimized={true}
                    src={basicInformation?.logo?.replace(
                      "public",
                      process.env.NEXT_PUBLIC_BASE_URL
                    )}
                    alt={`Logo ${basicInformation.clinicName}`}
                    title={basicInformation.clinicName}
                    layout="fill"
                    objectFit="contain"
                    className="object-center lg:object-left"
                    quality={90}
                  />
                </a>
              </Link>
            </HeadComponent>
          </div>
          <div
            onClick={() => {
              setNavbarShown(false);
            }}
            className={
              navbarShown
                ? "bg-grayscale-1000 bg-opacity-50 fixed top-0 left-0 w-full h-screen block lg:hidden"
                : "bg-grayscale-1000 bg-opacity-50 fixed top-0 left-0 w-full h-screen hidden lg:hidden"
            }
          />
          <div
            className={
              navbarShown
                ? "navbar fixed lg:static h-screen w-4/5 lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-500 top-0 right-0 ml-16 lg:ml-0 bg-grayscale-100 p-5 lg:p-0 lg:flex items-center justify-center flex-1 overflow-y-auto lg:overflow-visible"
                : "navbar fixed lg:static h-screen w-full lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-500 top-0 -right-full ml-16 lg:ml-0 bg-grayscale-100 p-5 lg:p-0 lg:flex items-center justify-center flex-1"
            }
          >
            <div className="border-b border-grayscale-200 mb-3 poppins font-bold pb-2 text-primary-300 flex justify-between items-center lg:hidden">
              <span>Menu</span>
              <button
                type="button"
                onClick={() => {
                  setNavbarShown(false);
                }}
                className="p-2"
              >
                <Close
                  width={12}
                  height={12}
                  fill={theme.colors.grayscale[700]}
                />
              </button>
            </div>
            <ul className="block lg:flex">
              <NavbarList href="/" onClick={() => setNavbarShown(false)}>
                Home
              </NavbarList>
              <NavbarListDropdown
                dropdown={[
                  {
                    title: "Profil Klinik",
                    href: "/halaman/profil-klinik",
                  },
                  {
                    title: "Visi dan Misi",
                    href: "/halaman/visi-dan-misi",
                  },
                  {
                    title: "Fasilitas",
                    href: "/halaman/fasilitas",
                  },
                  {
                    title: "Our Team",
                    href: "/halaman/our-team",
                  },
                ]}
                onClick={() => setNavbarShown(false)}
              >
                About Us
              </NavbarListDropdown>
              <NavbarListDropdown
                dropdown={dropdown}
                onClick={() => setNavbarShown(false)}
              >
                Our Services
              </NavbarListDropdown>
              <NavbarList
                href="/testimonial"
                onClick={() => setNavbarShown(false)}
              >
                Testimonial
              </NavbarList>
              <NavbarList href="/promo" onClick={() => setNavbarShown(false)}>
                Promo
              </NavbarList>
              <NavbarList href="/blog" onClick={() => setNavbarShown(false)}>
                Blog
              </NavbarList>
            </ul>
          </div>
          <div className="lg:w-1/5 flex justify-end">
            <a
              className="flex lg:py-2 lg:px-3 lg:bg-primary-100 lg:rounded-lg lg:text-grayscale-100 lg:items-center lg:hover:bg-primary-200"
              target="_blank"
              title="Reservasi via Whatsapp"
              href={
                `https://wa.me/${basicInformation.whatsapp
                  ?.replace(/[^0-9]/g, "")
                  ?.replace(/^08/, "628")}?text=` +
                encodeURIComponent(
                  "Nama :\r\nAlamat :\r\nKeluhan :\r\nRencana Perawatan :"
                )
              }
            >
              <Schedule
                width={16}
                height={16}
                fill={theme.colors.grayscale[100]}
                className="hidden lg:block"
              />
              <Schedule
                width={24}
                height={24}
                fill={theme.colors.grayscale[800]}
                className="block lg:hidden"
              />
              <span className="ml-3 hidden lg:block">
                Reservasi <span className="hidden xl:inline">Online</span>
              </span>
            </a>
          </div>
        </Container>
      </div>
      {!transparentFirst && <div className="h-20" />}
    </>
  );
}
