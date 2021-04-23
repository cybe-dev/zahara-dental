import { useEffect, useState } from "react";
import Menu from "../images/Menu";
import Container from "./Container";
import { theme } from "../../tailwind.config";
import Close from "../images/Close";
import Schedule from "../images/Schedule";

export default function Header() {
  const [transparent, setTransparent] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [navbarShown, setNavbarShown] = useState(false);

  useEffect(() => {
    if (offsetY > 0) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }, [offsetY]);

  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);
  return (
    <div
      className={
        transparent
          ? "h-16 bg-transparent fixed z-20 w-full duration-300 transition-all"
          : "h-16 bg-grayscale-100 fixed z-20 w-full duration-300 transition-all shadow-md"
      }
    >
      <Container className="flex justify-between items-center h-full">
        <div>
          <a className="font-bold text-xl text-primary-100">Zahara Dental</a>
        </div>
        <button
          type="button"
          onClick={() => {
            setNavbarShown(true);
          }}
        >
          <Menu
            width={24}
            height={24}
            fill={theme.colors.grayscale[800]}
            className="block lg:hidden"
          />
        </button>
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
              ? "navbar fixed lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-500 top-0 right-0 w-4/5 h-screen ml-16 bg-grayscale-100 p-5 lg:p-0 lg:flex items-center"
              : "navbar fixed lg:static lg:h-auto lg:w-auto lg:bg-transparent transition-all duration-500 top-0 -right-full w-full h-screen ml-16 bg-grayscale-100 p-5 lg:p-0 lg:flex items-center"
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
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex flex-col items-start border-t border-grayscale-200 lg:border-t-0 mt-10 lg:mt-0">
            <a className="flex mt-5 lg:mt-0 lg:ml-8 py-2 px-3 bg-primary-100 rounded-lg text-grayscale-100 items-center hover:bg-primary-200">
              <Schedule
                width={16}
                height={16}
                fill={theme.colors.grayscale[100]}
              />
              <span className="ml-3">Reservasi Online</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
