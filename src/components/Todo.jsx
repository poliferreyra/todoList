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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { setLocalStorage } from "../utils/localStorage";

import React, { useState } from "react";

export const Todo = ({ todo, setTaskList, taskList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [editTask, setEditTask] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const editingTask = (id) => {
    const editedTask = [...taskList];
    editedTask.map((task) => {
      if (task.id === id) {
        task.title = editValue;
      }
      return task;
    });

    setTaskList(editedTask);
    setLocalStorage("taskList", editedTask);
    onClose();
  };

  const checkTask = (id) => {
    const check = [...taskList];
    check.filter((task) => {
      if (task.id === id) {
        // toggle
        task.done = !task.done;
      }
      setTaskList(check);
      setLocalStorage("taskList", check);
    });
  };

  const deleteTask = (id) => {
    const newTasks = [...taskList].filter((task) => task.id !== id);
    setTaskList(newTasks);
    setLocalStorage("taskList", newTasks);
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
              onClick={() => {
                setEditTask(true);
                onOpen();
              }}
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
              onClick={() => {
                setEditTask(false);
                onOpen();
              }}
            ></Button>

            {/* Delete Alert */}
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={()=>{
                onClose()
                setEditTask(false)
              }}
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
      {editTask && (
        <Modal isOpen={editTask ? isOpen : onClose} onClose={onClose} >
          <ModalOverlay />
          <ModalContent w={{ base: "60%" }}>
            <ModalHeader>Task Edit</ModalHeader>

            <ModalBody>
              <Input
                focusBorderColor="#C4ED5C"
                defaultValue={todo.title}
                onChange={handleEditValue}
              />
            </ModalBody>

            <ModalFooter>
              <Button mr={3} size={{ base: "sm", sm: "md" }} onClick={onClose}>
                Close
              </Button>
              <Button
                bg="#C4ED5C"
                size={{ base: "sm", sm: "md" }}
                variant="ghost"
                _hover={{ bg: "#cef768" }}
                onClick={() => {
                  editingTask(todo.id);
                }}
              >
                Edit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
