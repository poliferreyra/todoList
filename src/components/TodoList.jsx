import { Stack } from "@chakra-ui/react";

import { Todo } from "./Todo";

export const TodoList = ({taskList}) => {
  return (
    <Stack justifyContent="center" spacing={4} align="center" mt={4} mb={4}>
      {taskList.map((todo) => (
        <Todo key={todo.title} todo={todo} />
      ))}
    </Stack>
  );
};
