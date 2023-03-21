import { Box, Heading, Grid, GridItem, InputGroup, InputRightElement, Button, Input, Select } from "@chakra-ui/react";
import { SiAddthis } from "react-icons/si";

export const Header = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" color="#AED9E0" textAlign="left" ml={3} mt="5">
        To-Do App
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={1} m={2}>
        <GridItem colSpan={3} h="10" bg="white" mt={3}>
          <InputGroup>
            <InputRightElement
              children={
                <Button rightIcon={<SiAddthis />} color="#FDD216" bg="white" />
              }
            />
            <Input type="text" placeholder="Type your new task" />
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
    </Box>
  );
};
