import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { getAllData } from "../service/api";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  const fetchApi = async () => {
    const data = await getAllData();
    const info = data[0].projects;
    setAllProjects(info);
    console.log(info);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Box zIndex={1}>
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
            {allProjects.map((e) => {
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
                      <Heading>{e.name}</Heading>
                      <Image
                        src={e.image}
                        alt="window"
                        W={{ md: "96", lg: "full" }}
                        h={"72"}
                      />
                      <HStack
                        w={"full"}
                        gap={5}
                        justifyContent={"space-evenly"}
                      >
                        <a
                          href={e.github}
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
                          href={e.link}
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
