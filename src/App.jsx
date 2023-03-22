import { Box, VStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

import imgBg from "./assets/imgBg.jpg";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";


function App() {
  const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || []
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState(initialTaskList)
 
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
          <Box bg="#FEEF3B" w={400}>
            <Header value={value} setValue={setValue} taskList={taskList} setTaskList={setTaskList} />
            <TodoList taskList={taskList}/>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
