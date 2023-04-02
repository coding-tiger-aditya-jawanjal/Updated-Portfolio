import React from "react";
import { Box, Center, Heading, HStack, Image } from "@chakra-ui/react";

const Skills = () => {
  const List = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  return (
    <>
      <Box id="skills" mt={"600px"}>
        <Center>
          <Heading as={"h2"} fontFamily={"cursive"} mb={"14"} color={"bisque"}>
            Skills
          </Heading>
        </Center>
        <HStack
          wrap={"wrap"}
          gap={10}
          pl={"5"}
          justifyContent={"center"}
        >
          {List.map((e) => {
            return (
              <>
                <Image
                  src="https://reactjs.org/logo-og.png"
                  w={"52"}
                  h={"52"}
                  borderRadius={"full"}
                />
              </>
            );
          })}
        </HStack>
      </Box>
    </>
  );
};

export default Skills;
