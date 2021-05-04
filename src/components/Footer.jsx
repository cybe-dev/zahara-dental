import { theme } from "../../tailwind.config";
import Whatsapp from "../images/Whatsapp";
import Container from "./Container";

export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 right-0 m-5 lg:m-8 flex items-center z-20">
        <span className="bg-grayscale-100 text-grayscale-800 p-2 px-3 rounded mr-2 text-xs lg:text-sm shadow">
          Butuh bantuan?
        </span>
        <a
          className="p-3 bg-primary-100 flex items-center justify-center rounded-full shadow"
          style={{ backgroundColor: "#128C7E" }}
          target="_blank"
          href="http://wa.me/6285270426789"
        >
          <Whatsapp
            className="w-5 h-5 lg:w-6 lg:h-6"
            fill={theme.colors.grayscale[100]}
          />
        </a>
      </div>
      <div className="bg-primary-100 border-t border-primary-200">
        <Container className="text-grayscale-100 text-center p-3">
          &copy; 2021 Zahara Dental
        </Container>
      </div>
    </>
  );
}
