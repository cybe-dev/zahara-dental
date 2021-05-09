import Head from "next/head";
import Container from "../src/components/Container";
import HeadingPage from "../src/components/HeadingPage";
import * as TestimoniComponent from "../src/components/Testimoni";

export default function Testimoni() {
  return (
    <Container>
      <Head>
        <title>Testimoni</title>
      </Head>
      <HeadingPage
        breadcrumbItems={[
          {
            href: "/",
            title: "Beranda",
          },
          {
            title: "Testimoni",
          },
        ]}
        title="Testimoni"
      />
      <TestimoniComponent.default>
        <TestimoniComponent.TestimoniList
          name="Akbar & Razzaq"
          title="App Developer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra.
        </TestimoniComponent.TestimoniList>
        <TestimoniComponent.TestimoniList
          name="Akbar & Razzaq"
          title="App Developer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra.
        </TestimoniComponent.TestimoniList>
        <TestimoniComponent.TestimoniList
          name="Akbar & Razzaq"
          title="App Developer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra.
        </TestimoniComponent.TestimoniList>
        <TestimoniComponent.TestimoniList
          name="Akbar & Razzaq"
          title="App Developer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra.
        </TestimoniComponent.TestimoniList>
        <TestimoniComponent.TestimoniList
          name="Akbar & Razzaq"
          title="App Developer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra.
        </TestimoniComponent.TestimoniList>
        <TestimoniComponent.TestimoniList
          name="Akbar & Razzaq"
          title="App Developer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          placerat magna, a luctus ligula. Cras nibh odio, imperdiet vel leo at,
          semper eleifend lorem. Donec mollis vel sem id pharetra.
        </TestimoniComponent.TestimoniList>
      </TestimoniComponent.default>
    </Container>
  );
}
