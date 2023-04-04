import React, { useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

const ProjectsAdmin = () => {
  const [projectName, setProjectName] = useState();
  const [githubHref, setGithubHref] = useState();
  const [projectLink, setProjectLink] = useState();
  const [projectPic, setProjectPic] = useState();

  return (
    <>
      <Center>
        <Container maxW={"container.md"} mt={"5"} mb={"150px"}>
          <VStack
            gap={4}
            border={"2px solid red"}
            p={"4"}
            bgColor={"honeydew"}
            borderRadius={"3xl"}
            pb={"8"}
          >
            <Heading textAlign={"center"} as={"h4"} fontSize={"larger"}>
              Projects
            </Heading>
            <FormControl>
              <FormLabel>Project Name : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} />
            </FormControl>
            <FormControl>
              <FormLabel>Github href : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} />
            </FormControl>
            <FormControl>
              <FormLabel>Project link : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} />
            </FormControl>
            <FormControl>
              <FormLabel>Image : </FormLabel>
              <Input type={"file"} p={"1"} />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
            >
              Update
            </Button>
          </VStack>
        </Container>
      </Center>
    </>
  );
};

export default ProjectsAdmin;
