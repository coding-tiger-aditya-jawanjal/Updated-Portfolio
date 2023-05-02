import React, { useEffect, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import {
  addProject,
  deleteTheProject,
  getAllData,
  updateTheProject,
} from "../service/api";

const ProjectsAdmin = () => {
  const [projectName, setProjectName] = useState();
  const [githubHref, setGithubHref] = useState();
  const [projectLink, setProjectLink] = useState();
  const [projectPic, setProjectPic] = useState();
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState();
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    const data = await getAllData();
    const info = data[0].projects;
    setAllProjects(info);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const addNewProject = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", projectPic);
    data.append("name", projectName);
    data.append("github", githubHref);
    data.append("link", projectLink);
    await addProject(data);
    fetchApi();
    setLoading(false);
  };

  const updateProject = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", projectPic);
    data.append("name", projectName);
    data.append("github", githubHref);
    data.append("link", projectLink);
    const all = {
      data,
      id,
    };
    await updateTheProject(all);
    await fetchApi();
    setLoading(false);
  };

  const editProject = (e) => {
    setProjectName(e.name);
    setGithubHref(e.github);
    setProjectLink(e.link);
    setProjectPic(e.image);
    setToggle(true);
    setId(e._id);
  };

  const deleteProject = async (pId) => {
    setLoading(true);
    await deleteTheProject(pId);
    fetchApi();
    setLoading(false);
  };

  if (loading) {
    return <Spinner size={"xl"} mt={"18vh"} />;
  }

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
              <Input
                type={"text"}
                placeholder={"Enter the Title"}
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName ? projectName : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Github href : </FormLabel>
              <Input
                type={"text"}
                placeholder={"Enter the Title"}
                onChange={(e) => setGithubHref(e.target.value)}
                value={githubHref ? githubHref : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Project link : </FormLabel>
              <Input
                type={"text"}
                placeholder={"Enter the Title"}
                onChange={(e) => setProjectLink(e.target.value)}
                value={projectLink ? projectLink : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image : </FormLabel>
              <Input
                type={"file"}
                p={"1"}
                onChange={(e) => setProjectPic(e.target.files[0])}
              />
            </FormControl>
            {toggle ? (
              <Button
                w={"full"}
                bgColor={"whatsapp.100"}
                type={"submit"}
                fontSize={"larger"}
                onClick={() => updateProject()}
              >
                Update
              </Button>
            ) : (
              <Button
                w={"full"}
                bgColor={"whatsapp.100"}
                type={"submit"}
                fontSize={"larger"}
                onClick={() => addNewProject()}
              >
                Add
              </Button>
            )}
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
            {allProjects.map((e, i) => {
              return (
                <Tr key={e.id}>
                  <Td>{i + 1}</Td>
                  <Td>{e.name}</Td>
                  <Td>{e.github}</Td>
                  <Td>{e.link}</Td>
                  <Td>{e.image}</Td>
                  <Td>
                    <Button size={"xs"}>
                      <TbEdit size={"24"} onClick={() => editProject(e)} />{" "}
                    </Button>
                  </Td>
                  <Td>
                    <Button size={"xs"}>
                      <MdDelete
                        size={"24"}
                        onClick={() => deleteProject(e._id)}
                      />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProjectsAdmin;
