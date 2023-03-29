import { Box, Button, Text } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { setLocalStorage } from "../utils/localStorage";

export const Todo = ({ todo, setTaskList, taskList }) => {
  const deleteTask = (id) => {
    const newTasks = [...taskList].filter((task) => task.id !== id);
    setTaskList(newTasks);
    setLocalStorage("taskList", newTasks);
  };

  const checkTask = (id) => {
    const check = [...taskList];
    check.filter((task) => {
      if (task.id === id) {
        task.done = !task.done;
        // asi hace el toggle
      }
      setTaskList(check);
      setLocalStorage("taskList", check);
    });
  };
  return (
    <Box>
      <Box
        display="flex"
        gap={2}
        boxShadow="xs"
        pl={2}
        rounded="md"
        bg="#C4ED5C"
        justifyContent="space-between"
        alignItems="center"
        w="350px"
        mb={1}
      >
        <Text as={todo.done && "s"}>{todo.title}</Text>
        <Box>
          <Button
            rightIcon={<AiOutlineCheckSquare />}
            size="md"
            variant="ghost"
            color="green"
            onClick={() => {
              checkTask(todo.id);
            }}
          ></Button>
          <Button
            rightIcon={<RiDeleteBin6Line />}
            size="md"
            variant="ghost"
            color="red"
            onClick={() => {
              
              deleteTask(todo.id);
            }}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};
