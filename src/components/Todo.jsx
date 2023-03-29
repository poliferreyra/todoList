import {
  Box,
  Button,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { setLocalStorage } from "../utils/localStorage";

import React from "react";

export const Todo = ({ todo, setTaskList, taskList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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
    <>
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
              onClick={onOpen}
            ></Button>

            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Delete Task
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteTask(todo.id);
                      }}
                      ml={3}
                    >
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Box>
        </Box>
      </Box>
    </>
  );
};
