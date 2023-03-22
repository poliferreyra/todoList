import { Box, Button } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckSquare } from "react-icons/ai";

export const Todo = ({ todo }) => {
  return (
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
        {todo.title}
        <Box>
          <Button
            rightIcon={<AiOutlineCheckSquare />}
            size="md"
            variant="ghost"
            color="green"
          ></Button>
          <Button
            rightIcon={<RiDeleteBin6Line />}
            size="md"
            variant="ghost"
            color="red"
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};
