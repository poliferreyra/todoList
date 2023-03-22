import {
  Box,
  Heading,
  FormControl,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { SiAddthis } from "react-icons/si";
import { setLocalStorage } from "../utils/localStorage";

export const Header = ({ value, setValue, taskList, setTaskList }) => {
  const handleInputValue = (e) => setValue(e.target.value);

  const addTodo = () => {
    const newTask = [...taskList, { title: value, done: false }];

    setTaskList(newTask);

    // me importo funcion (utils/localStorage.js) y le paso los argumentos (key, data)
    setLocalStorage("taskList", newTask);

    setValue("");
  };

  return (
    <Box>
      <Heading as="h3" size="lg" color="#FFFFFF" textAlign="left" ml={3} mt="5">
        To-Do App
      </Heading>
      <FormControl>
        <Grid templateColumns="repeat(2, 1fr)" gap={1} m={2}>
          <GridItem colSpan={3} h="10" bg="white" mt={3}>
            <InputGroup>
              <InputRightElement
                children={
                  <Button
                    rightIcon={<SiAddthis />}
                    color="#FDD216"
                    bg="white"
                    type="button"
                    onClick={addTodo}
                  />
                }
              />
              <Input
                type="text"
                value={value}
                placeholder="Type your new task"
                onChange={handleInputValue}
              />
            </InputGroup>
          </GridItem>

          <GridItem colStart={4} colEnd={6} h="10" bg="white" mt={3}>
            <Select>
              <option value="all">All</option>
              <option value="complete">Complete</option>
              <option value="pending">Pending</option>
            </Select>
          </GridItem>
        </Grid>
      </FormControl>
    </Box>
  );
};
