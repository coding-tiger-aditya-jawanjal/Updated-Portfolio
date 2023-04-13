import React from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

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
        <Heading
          as={"h2"}
          fontFamily={"cursive"}
          mb={"14"}
          color={"bisque"}
          textAlign={"center"}
        >
          Skills
        </Heading>
        <HStack
          wrap={"wrap"}
          gap={10}
          justifyContent={{ base: "center", md: "flex-start" }}
          pl={{ md: "7", lg: "14" }}
        >
          {List.map((e) => {
            return (
              <>
                <Stack gap={3} alignItems={"center"}>
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    w={"52"}
                    h={"52"}
                    borderRadius={"full"}
                  />
                  <Text color={"whiteAlpha.900"} fontSize={"1.3rem"}>
                    React.js
                  </Text>
                </Stack>
              </>
            );
          })}
        </HStack>
      </Box>
    </>
  );
};

export default Skills;
