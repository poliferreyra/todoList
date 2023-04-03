import {
  Box,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { setLocalStorage } from "../utils/localStorage";

import React, { useState } from "react";
import { ModalEdit } from "./ModalEdit";

export const Todo = ({ todo, setTaskList, taskList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [edit, setEdit] = useState(false);

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
      <Box w={{ base: "90%", sm: "90%", md: "80%" }}>
        <Box
          display="flex"
          gap={2}
          boxShadow="xs"
          pl={2}
          rounded="md"
          bg="#C4ED5C"
          justifyContent="space-between"
          alignItems="center"
          maxHeight="40px"
          mb={1}
          fontSize={{ base: "13px", sm: "15px", md: "15px" }}
        >
          <Text as={todo.done && "s"}>{todo.title}</Text>
          <Box>
            <Button
              rightIcon={<AiOutlineEdit />}
              size={{ base: "sm", sm: "md" }}
              variant="ghost"
              color="black"
              onClick={onOpen}
            ></Button>

            <Button
              rightIcon={<AiOutlineCheckSquare />}
              size={{ base: "sm", sm: "md" }}
              variant="ghost"
              color="green"
              onClick={() => {
                checkTask(todo.id);
              }}
            ></Button>

            <Button
              rightIcon={<RiDeleteBin6Line />}
              size={{ base: "sm", sm: "md" }}
              variant="ghost"
              color="red"
              onClick={onOpen}
            ></Button>

            {/* Delete Alert */}
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent w={{ base: "60%" }}>
                  <AlertDialogHeader fontSize="sm" fontWeight="bold">
                    Delete Task
                  </AlertDialogHeader>

                  <AlertDialogBody fontSize="sm">
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button
                      ref={cancelRef}
                      onClick={onClose}
                      size={{ base: "sm", sm: "md" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      size={{ base: "sm", sm: "md" }}
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
      {/* edit Modal */}
      {edit && <ModalEdit />}
    </>
  );
};
