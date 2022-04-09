import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Subjects from "../components/Subjects";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Subjects />
    </Flex>
  )
}
