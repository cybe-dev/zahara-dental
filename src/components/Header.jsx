import { useEffect, useState } from "react";
import Menu from "../images/Menu";
import Container from "./Container";
import { theme } from "../../tailwind.config";
import Close from "../images/Close";
import Schedule from "../images/Schedule";
import Link from "next/link";
import { useWeb } from "../context/web-interface";
import Image from "next/image";

const NavbarList = ({ href, children, onClick, ...props }) => (
  <li onClick={onClick}>
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  </li>
);

export default function Header({ transparentFirst = false, h1 = false }) {
  const [transparent, setTransparent] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [navbarShown, setNavbarShown] = useState(false);
  const HeadComponent = h1 ? "h1" : "div";
  const {
    state: { basicInformation },
  } = useWeb();

  useEffect(() => {
    if (offsetY > 0 || !transparentFirst) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }, [offsetY, transparentFirst]);

  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);
  return (
    <>
      <div
        className={
          transparent
            ? "h-16 bg-transparent fixed z-20 w-full duration-300 transition-all"
            : "h-16 bg-grayscale-100 fixed z-20 w-full duration-300 transition-all shadow-md"
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
                ? "opacity-0 lg:opacity-100 w-1/4 transition-all duration-500"
                : "opacity-100 lg:opacity-100 w-1/4 transition-all duration-500"
            }
          >
            <HeadComponent>
              <Link href="/">
                <a className="font-bold text-primary-100 flex items-center h-8 w-full relative">
                  <Image
                    src={basicInformation?.logo?.replace(
                      "public",
                      process.env.NEXT_PUBLIC_BASE_URL
                    )}
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
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
                ? "navbar fixed lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-500 top-0 right-0 w-4/5 h-screen ml-16 lg:ml-0 bg-grayscale-100 p-5 lg:p-0 lg:flex items-center justify-center flex-1"
                : "navbar fixed lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-500 top-0 -right-full w-full h-screen ml-16 lg:ml-0 bg-grayscale-100 p-5 lg:p-0 lg:flex items-center justify-center flex-1"
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
                Beranda
              </NavbarList>
              <NavbarList
                href="/halaman/tentang-kami"
                onClick={() => setNavbarShown(false)}
              >
                Tentang
              </NavbarList>
              <NavbarList
                href="/testimoni"
                onClick={() => setNavbarShown(false)}
              >
                Testimoni
              </NavbarList>
              <NavbarList href="/promo" onClick={() => setNavbarShown(false)}>
                Promo
              </NavbarList>
              <NavbarList href="/blog" onClick={() => setNavbarShown(false)}>
                Blog
              </NavbarList>
            </ul>
          </div>
          <div className="lg:w-1/4 flex justify-end">
            <a
              className="flex lg:py-2 lg:px-3 lg:bg-primary-100 lg:rounded-lg lg:text-grayscale-100 lg:items-center lg:hover:bg-primary-200"
              target="_blank"
              href={
                `https://wa.me/${basicInformation.whatsapp
                  .replace(/[^0-9]/g, "")
                  .replace(/^08/, "628")}?text=` +
                encodeURIComponent(
                  "Nama Lengkap :\r\nNomor Telepon :\r\nPerawatan :\r\nTanggal :\r\nWaktu :"
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
              <span className="ml-3 hidden lg:block">Reservasi</span>
            </a>
          </div>
        </Container>
      </div>
      {!transparentFirst && <div className="h-16" />}
    </>
  );
}
