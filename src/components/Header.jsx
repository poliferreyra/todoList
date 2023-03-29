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
  AlertDescription,
} from "@chakra-ui/react";
import { SiAddthis } from "react-icons/si";
import { setLocalStorage } from "../utils/localStorage";
import { AlertDialogExample } from "./AlertDialog";

export const Header = ({
  value,
  setValue,
  taskList,
  setTaskList,
  // filter,
  // setFilter,
}) => {
  const handleInputValue = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (value.length < 5) {
      alert("You must type 5 characters");
      // <Alert status="error">
      //   <AlertIcon />
      //   <AlertTitle>Your browser is outdated!</AlertTitle>
      //   <AlertDescription>
      //     Your Chakra experience may be degraded.
      //   </AlertDescription>
      // </Alert>;
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
      <Box as="form" onSubmit={addTodo}>
        <Grid templateColumns="repeat(2, 1fr)" gap={1} m={2}>
          <GridItem colSpan={3} h="10" bg="white" mt={3}>
            <InputGroup>
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

          <GridItem colStart={4} colEnd={6} h="10" bg="white" mt={3}>
            <Select
              // placeholder="Filter option"
              onChange={handleFilter}
            >
              <option>Select filter...</option>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </Select>
          </GridItem>
        </Grid>
      </Box>
      <AlertDialogExample/>
    </Box>
  );
};
