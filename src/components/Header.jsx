import {
  Box,
  Heading,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Button,
  Input,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useState } from "react";
import { SiAddthis } from "react-icons/si";
import { setLocalStorage } from "../utils/localStorage";

export const Header = ({ value, setValue, taskList, setTaskList }) => {
  const [error, setError] = useState(false);

  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e) => {
    setError(false);
    e.preventDefault();
    if (value.length < 5) {
      setError(true);
      return
    } else {
      const newTask = [
        ...taskList,
        { title: value, done: false, id: self.crypto.randomUUID() },
      ];

      setTaskList(newTask);
      setLocalStorage("taskList", newTask);
      // me importo la funcion (utils/localStorage.js) y le paso los argumentos (key, data)
      setValue("");
    }
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    const taskLocalStorage = JSON.parse(localStorage.getItem("taskList"));

    if (filterValue === "completed") {
      const completed = taskLocalStorage.filter((task) => task.done);
      setTaskList(completed);
    }
    if (filterValue === "pending") {
      const pending = taskLocalStorage.filter((task) => !task.done);
      setTaskList(pending);
    }
    if (filterValue === "all") {
      setTaskList(taskLocalStorage);
    }
  };
  return (
    <Box>
      <Heading as="h3" size="lg" color="#FFFFFF" textAlign="left" ml={3} mt="5">
        To-Do App
      </Heading>
      <Box as="form" onSubmit={addTodo} >
        <Grid templateColumns={{base:"1fr", sm:"repeat(2, 1fr)"}} gap={1} m={2} p={3}>
          <GridItem  h="10" bg="white" mt={3}>
            <InputGroup >
              <InputRightElement
                children={
                  <Button
                  rightIcon={<SiAddthis />}
                  color="#FDD216"
                  bg="white"
                  type="submit"
                  />
                }
                />
              <Input
                type="text"
                value={value}
                placeholder="Type new task"
                onChange={handleInputValue}
                />
            </InputGroup>
          </GridItem>

          <GridItem h="10" bg="white" mt={3}>
            <Select onChange={handleFilter}>
              <option>Select filter...</option>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </Select>
          </GridItem>
        </Grid>
                {error && (
                  <Alert bg="rgba(255, 255, 255, 0.3)" status="warning" mt={3} p={3}>
                    <AlertIcon />
                    <AlertTitle>An error was detected. Try again</AlertTitle>
                    </Alert>
                )}
      </Box>
    </Box>
  );
};
