import { Stack } from "@chakra-ui/react";

import { Todo } from "./Todo";

export const TodoList = ({task}) => {
  return (
    <Stack justifyContent="center" spacing={4} align="center" mt={4} mb={4}>
      {task.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};
