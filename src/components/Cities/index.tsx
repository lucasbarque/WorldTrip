import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10" color="gray.700">
        Cities +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City image="/images/londres.jpg" name="London" country="United Kingdom" flag="/images/reino-unido.svg" />
        <City image="/images/paris.jpg" name="Paris" country="France" flag="/images/france.svg" />
        <City image="/images/rome.jpg" name="Rome" country="Italy" flag="/images/italy.svg" />
        <City image="/images/prague.jpg" name="Prague" country="Czech Republic" flag="/images/czech-republic.png" />
        <City image="/images/amsterdam.jpg" name="Amsterdam" country="Netherlands" flag="/images/netherlands.svg" />
      </Grid>
    </>
  )
}