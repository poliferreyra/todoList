import { Box, VStack, Flex } from "@chakra-ui/react";

import imgBg from "./assets/imgBg.jpg";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";


function App() {
  return (
    <Flex justifyContent="center">
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
          <Box bg="#EEEEEE" w={400}>
            <Header />
            <TodoList />
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
