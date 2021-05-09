import { useEffect, useState } from "react";
import Menu from "../images/Menu";
import Container from "./Container";
import { theme } from "../../tailwind.config";
import Close from "../images/Close";
import Schedule from "../images/Schedule";
import Logo from "../images/Logo";
import Link from "next/link";

const NavbarList = ({ href, children, ...props }) => (
  <li>
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  </li>
);

export default function Header({ transparentFirst = false }) {
  const [transparent, setTransparent] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [navbarShown, setNavbarShown] = useState(false);

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
                ? "opacity-0 lg:opacity-100 lg:w-1/4 transition-all duration-500"
                : "opacity-100 lg:opacity-100 lg:w-1/4 transition-all duration-500"
            }
          >
            <h1>
              <a className="font-bold text-primary-100 flex items-center">
                <Logo width={36} height={32} />{" "}
                <div className="ml-3">
                  <span
                    className="block fredoka text-sm"
                    style={{ letterSpacing: 4 }}
                  >
                    ZAHARA
                  </span>
                  <span className="block text-xs text-grayscale-600">
                    DENTAL CARE
                  </span>
                </div>
              </a>
            </h1>
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
              <NavbarList href="/">Beranda</NavbarList>
              <NavbarList href="/tentang">Tentang</NavbarList>
              <NavbarList href="/testimoni">Testimoni</NavbarList>
              <NavbarList href="/promo">Promo</NavbarList>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 flex justify-end">
            <a
              className="flex lg:py-2 lg:px-3 lg:bg-primary-100 lg:rounded-lg lg:text-grayscale-100 lg:items-center lg:hover:bg-primary-200"
              target="_blank"
              href={
                "https://wa.me/6285270426789?text=" +
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
