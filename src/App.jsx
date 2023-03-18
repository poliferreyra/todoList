import {
  Box,
  VStack,
  Flex,
  Heading,
  Grid,
  GridItem,
  Select,
  Input,
  Button,

} from "@chakra-ui/react";
import imgBg from "./assets/imgBg.jpg";

function App() {
  return (
    <Flex display="flex" justifyContent="center">
      <Box
        w="90%"
        h="100vh"
        p={20}
        bgImage={`url(${imgBg})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack>
          <Box bg="#EBEBEB" w={500}>
            <Heading as="h2" color="#A7D4DA" textAlign="left" ml={3}>
              ToDo List
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap={1} m={5}>
              <GridItem colSpan={3} h="10" bg="white" mt={5}>
                <Input placeholder="Type your task" />
              </GridItem>
              <GridItem colStart={4} colEnd={6} h="10" bg="white" mt={5}>
                <Select>
                  <option value="all">All</option>
                  <option value="complete">Complete</option>
                  <option value="pending">Pendings</option>
                </Select>
              </GridItem>
            </Grid>
            <Button  bg="#A7D4DA">
              Send
            </Button>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
