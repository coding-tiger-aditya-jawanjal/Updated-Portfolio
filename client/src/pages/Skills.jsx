import React, { useContext } from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { profile } from "../App";

const Skills = () => {
  const List = useContext(profile).data.skills;
  // const List = [
  //   {
  //     id: 1,
  //   },
  //   {
  //     id: 2,
  //   },
  //   {
  //     id: 3,
  //   },
  //   {
  //     id: 4,
  //   },
  //   {
  //     id: 5,
  //   },
  //   {
  //     id: 6,
  //   },
  //   {
  //     id: 7,
  //   },
  //   {
  //     id: 8,
  //   },
  //   {
  //     id: 9,
  //   },
  // ];
  return (
    <>
      <Box id="skills" >
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
                    src={e.logo}
                    w={"52"}
                    h={"52"}
                    borderRadius={"full"}
                  />
                  <Text color={"whiteAlpha.900"} fontSize={"1.3rem"}>
                    {e.name}
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
