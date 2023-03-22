import { Box, VStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

import imgBg from "./assets/imgBg.jpg";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([])
 
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
            <Header value={value} setValue={setValue} task={task} setTask={setTask} />
            <TodoList task={task}/>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
