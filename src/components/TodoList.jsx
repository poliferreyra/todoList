import { Stack } from "@chakra-ui/react";
import { Todo } from "./Todo";
import { Tasks } from "../data/Tasks"

export const TodoList = () => {
  return (
    <Stack justifyContent="center" spacing={4} align="center" mt={4} mb={4}>
      {Tasks.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};
