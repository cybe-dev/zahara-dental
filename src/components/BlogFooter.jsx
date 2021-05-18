import { useWeb } from "../context/web-interface";
import Container from "./Container";

export default function BlogFooter() {
  const {
    state: { basicInformation },
  } = useWeb();
  return (
    <div className="bg-primary-300">
      <Container className="flex justify-center items-center h-12 roboto text-grayscale-100">
        &copy;2021 - {basicInformation.clinicName}
      </Container>
    </div>
  );
}
