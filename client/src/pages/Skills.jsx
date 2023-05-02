import React, { useEffect, useState } from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { getAllData } from "../service/api";

const Skills = () => {
  const [allSkills, setAllSkills] = useState([]);

  const fetchApi = async () => {
    const data = await getAllData();
    const info = data[0].skills;
    setAllSkills(info);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  
  return (
    <>
      <Box id="skills">
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
          {allSkills.map((e) => {
            return (
              <>
                <Stack gap={3} alignItems={"center"}>
                  <Image src={e.logo} w={"52"} h={"52"} borderRadius={"full"} />
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
