import { Grid, Text } from "@chakra-ui/react";
import Infos from "./infos";

export default function Content() {
  return (
    <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        Europe is a continent, also recognised as part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of the continental landmass of Eurasia.
      </Text>

      <Infos />
    </Grid>
  )
}