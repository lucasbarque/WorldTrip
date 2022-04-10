import { Grid, GridItem } from "@chakra-ui/react";
import Subject from "./Subject";

export default function Subjects() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Subject icon="cocktail" text="night life" />
      </GridItem>
      <GridItem>
        <Subject icon="surf" text="beach" />
      </GridItem>
      <GridItem>
        <Subject icon="building" text="modern" />
      </GridItem>
      <GridItem>
        <Subject icon="museum" text="classic" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Subject icon="earth" text="and more..." />
      </GridItem>
    </Grid>
  )
}