import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

const Projects = () => {
  const list = [
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
  ];
  return (
    <>
      <Box zIndex={1}>
        <HStack w={"full"} h={"16"} mb={"30"} gap={7} shadow={"dark-lg"}>
          <Center
            w={"full"}
            fontSize={{ sm: "2xl", md: "3xl" }}
            fontWeight={"bold"}
            fontFamily={"cursive"}
          >
            <Box mr={"8"}>Full Stack</Box>
            <Box mr={"8"}>Frontend</Box>
            <Box mr={"8"}>Backend</Box>
          </Center>
        </HStack>
        <Center w={"full"} pt={"10"}>
          <HStack
            gap={8}
            wrap={"wrap"}
            maxW={"95%"}
            alignItems={"center"}
            mb={"150px"}
            ml={"3"}
            mr={"3"}
          >
            {list.map((e) => {
              return (
                <>
                  <Box>
                    <VStack
                      gap={5}
                      shadow={"dark-lg"}
                      borderRadius={"3xl"}
                      pb={"8"}
                      pt={"5"}
                    >
                      <Heading>Shopping Cart</Heading>
                      <Image
                        src="https://i.insider.com/5dd6bcfafd9db25c9e3d864b?width=1000&format=jpeg&auto=webp"
                        alt="window"
                        W={{ md: "96", lg: "full" }}
                        h={"72"}
                      />
                      <HStack w={"full"} gap={5} justifyContent={"space-evenly"}>
                        <a
                          href="http://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        
                        >
                          <Button
                            type={"button"}
                            size={"lg"}
                            bgColor={"whatsapp.300"}
                            w={"40"}
                          >
                            Github{" "}
                          </Button>
                        </a>
                        <a
                          href="http://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          
                        >
                          <Button
                            type={"button"}
                            size={"lg"}
                            w={"40"}
                            bgColor={"whatsapp.300"}
                          >
                            Live{" "}
                          </Button>
                        </a>
                      </HStack>
                    </VStack>
                  </Box>
                </>
              );
            })}
          </HStack>
        </Center>
      </Box>
    </>
  );
};

export default Projects;
