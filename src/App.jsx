import { Box, VStack, Flex } from "@chakra-ui/react";
import { useState } from "react";

import imgBg from "./assets/imgBg.jpg";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  const initialTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState(initialTaskList);

  return (
    <Flex justifyContent="center">
      <Box
        w="100%"
        h="100vh"
        p={10}
        bgImage={`url(${imgBg})`}
        bgPosition={{base:"bottom 50px",md:"center"}}
        bgRepeat="no-repeat"
        bgSize={{base:"cover", sm:"none", md:"cover"}}
      >
        <VStack>
          <Box  bg="rgba(255, 255, 255, 0.3)" w={{base:"100%", sm:"90%", md:"60%", lg:"50%", xl:"40%" }}>
            <Header
              value={value}
              setValue={setValue}
              taskList={taskList}
              setTaskList={setTaskList}
            />
            <TodoList taskList={taskList} setTaskList={setTaskList} />
          </Box>
        </VStack>
      </Box>
     </Flex>
  );
}

export default App;
