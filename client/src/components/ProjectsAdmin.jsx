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
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const ProjectsAdmin = () => {
  const [projectName, setProjectName] = useState();
  const [githubHref, setGithubHref] = useState();
  const [projectLink, setProjectLink] = useState();
  const [projectPic, setProjectPic] = useState();

  const updateProjects = () =>{}

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
              <Input type={"text"} placeholder={"Enter the Title"} onChange={(e)=>setProjectName(e.target.value)} value={projectName ? projectName : ""} />
            </FormControl>
            <FormControl>
              <FormLabel>Github href : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} onChange={(e)=>setGithubHref(e.target.value)} value={githubHref ? githubHref : ""} />
            </FormControl>
            <FormControl>
              <FormLabel>Project link : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} onChange={(e)=>setProjectLink(e.target.value)} value={projectLink ? projectLink : ""} />
            </FormControl>
            <FormControl>
              <FormLabel>Image : </FormLabel>
              <Input type={"file"} p={"1"} onClick={(e)=>setProjectPic(e.target.files[0])} />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={updateProjects}
            >
              Update
            </Button>
          </VStack>
        </Container>
      </Center>
      <TableContainer mt={"16"}>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              <Th>Sr. No</Th>
              <Th>Project Name</Th>
              <Th> Github Href</Th>
              <Th> Project Link</Th>
              <Th>Logo</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1.</Td>
              <Td>Digital Clock</Td>
              <Td>www.google.com</Td>
              <Td>www.google.com</Td>
              <Td>pic</Td>
              <Td>
                <TbEdit size={"24"} />{" "}
              </Td>
              <Td>
                <MdDelete size={"24"} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProjectsAdmin;
