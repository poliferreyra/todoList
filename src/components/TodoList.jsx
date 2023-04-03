import { Stack } from "@chakra-ui/react";

import { Todo } from "./Todo";

export const TodoList = ({value, setValue, taskList, setTaskList}) => {
  return (
    <Stack justifyContent="center" spacing={4} align="center" mt={4} mb={4}>
      {taskList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTaskList={setTaskList} taskList={taskList} />
        // el TODO me trae todo mi OBJETO (title:"xx", id:"xx", done:false) cada vez que itero en mi array TASKLIST
      ))}
    </Stack>
  );
};
