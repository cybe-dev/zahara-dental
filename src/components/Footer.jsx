import { theme } from "../../tailwind.config";
import { useWeb } from "../context/web-interface";
import Whatsapp from "../images/Whatsapp";
import Container from "./Container";

export default function Footer({ withoutSupport = false }) {
  const {
    state: { basicInformation },
  } = useWeb();
  return (
    <>
      {!withoutSupport && (
        <div className="fixed bottom-0 right-0 m-5 lg:m-8 flex items-center z-10">
          <span className="bg-grayscale-100 text-grayscale-800 p-2 px-3 rounded mr-2 text-xs lg:text-sm shadow">
            Butuh bantuan? Chat whatsapp
          </span>
          <a
            className="p-3 bg-primary-100 flex items-center justify-center rounded-full shadow"
            style={{ backgroundColor: "#128C7E" }}
            target="_blank"
            href={`http://wa.me/${basicInformation?.whatsapp
              ?.replace(/[^0-9]/g, "")
              ?.replace(/^08/, "628")}`}
            title="Support"
          >
            <Whatsapp
              className="w-5 h-5 lg:w-6 lg:h-6"
              fill={theme.colors.grayscale[100]}
            />
          </a>
        </div>
      )}
      <div className="bg-primary-300 border-t border-primary-200">
        <Container className="text-grayscale-100 text-center p-3">
          <h6>&copy;2021 {basicInformation?.clinicName}</h6>
          <div className="mt-2 text-sm">
            Icons made by{" "}
            <a href="https://www.freepik.com" title="Freepik" target="_blank">
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
            >
              www.flaticon.com
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
