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
  Stack,
} from "@chakra-ui/react";

import imgBg from "./assets/imgBg.jpg";
import { MdSend } from "react-icons/md";
import { Todo } from "./components/Todo";
import { Tasks } from "./data/Tasks";

function App() {
  return (
    <Flex display="flex" justifyContent="center">
      <Box
        w="100%"
        h="100vh"
        p={20}
        bgImage={`url(${imgBg})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <VStack>
          <Box bg="#E8E8E8" w={400}>
            <Heading as="h2" color="#597500" textAlign="left" ml={3}>
              ToDo List
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap={1} m={2}>
              <GridItem colSpan={3} h="10" bg="white" mt={3}>
                <Input placeholder="Type your task" />
              </GridItem>
              <GridItem colStart={4} colEnd={6} h="10" bg="white" mt={3}>
                <Select>
                  <option value="all">All</option>
                  <option value="complete">Complete</option>
                  <option value="pending">Pendings</option>
                </Select>
              </GridItem>
            </Grid>
            <Box display="flex" justifyContent="center">
              <Button rightIcon={<MdSend />} bg="#F4EB2C">
                Send
              </Button>
            </Box>
            <Stack
              display="flex"
              justifyContent="center"
              spacing={4}
              align="center"
              mt={4}
            >
              {Tasks.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </Stack>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
