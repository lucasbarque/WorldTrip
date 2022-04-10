import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Slider from "../components/Slider";
import Subjects from "../components/Subjects";

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:image:secure_url" content="/images/ogimage.png" />
        <meta name="twitter:image" content="/images/ogimage.png" />
        <meta name="twitter:image:src" content="/images/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Header />
      <Banner />
      <Subjects />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
