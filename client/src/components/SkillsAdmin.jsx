import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import {
  addSkill,
  deleteTheSkill,
  getAllData,
  updateTheSkill,
} from "../service/api";

const SkillsAdmin = () => {
  const [logo, setLogo] = useState();
  const [name, setName] = useState();
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState();
  const [allSkills, setAllSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    const data = await getAllData();
    const info = data[0].skills;
    setAllSkills(info);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const addNewSkill = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", logo);
    data.append("name", name);
    await addSkill(data);
    fetchApi();
    setLoading(false);
  };

  const updateSkill = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", logo);
    data.append("name", name);
    const all = {
      data,
      id,
    };
    await updateTheSkill(all);
    fetchApi();
    setLoading(false);
  };

  const editSkill = (e) => {
    setName(e.name);
    setToggle(true);
    setId(e._id);
  };

  const deleteSkill = async (sId) => {
    setLoading(true);
    await deleteTheSkill(sId);
    await fetchApi();
    setLoading(false);
  };

  if (loading) {
    return <Spinner size={"xl"} mt={"18vh"} />;
  }

  return (
    <>
      <Center>
        <Container maxW={"container.md"} mt={"5"}>
          <VStack
            gap={4}
            border={"2px solid red"}
            p={"4"}
            bgColor={"honeydew"}
            borderRadius={"3xl"}
            pb={"8"}
          >
            <Heading textAlign={"center"} as={"h4"} fontSize={"larger"}>
              Skills
            </Heading>
            <FormControl>
              <FormLabel>Logo : </FormLabel>
              <Input
                type={"file"}
                p={"1"}
                onChange={(e) => setLogo(e.target.files[0])}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name : </FormLabel>
              <Input
                type={"text"}
                placeholder={"Enter the Skill Name"}
                onChange={(e) => setName(e.target.value)}
                value={name ? name : ""}
              />
            </FormControl>
            {toggle ? (
              <Button
                w={"full"}
                bgColor={"whatsapp.100"}
                type={"submit"}
                fontSize={"larger"}
                onClick={updateSkill}
              >
                Update
              </Button>
            ) : (
              <Button
                w={"full"}
                bgColor={"whatsapp.100"}
                type={"submit"}
                fontSize={"larger"}
                onClick={addNewSkill}
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
              <Th>Skill</Th>
              <Th>Logo</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allSkills.map((e, i) => {
              return (
                <Tr key={e.id}>
                  <Td>{i + 1}</Td>
                  <Td>{e.name}</Td>
                  <Td>{e.logo}</Td>
                  <Td>
                    <Button size={"xs"}>
                      <TbEdit size={"24"} onClick={() => editSkill(e)} />{" "}
                    </Button>
                  </Td>
                  <Td>
                    <Button size={"xs"}>
                      <MdDelete
                        size={"24"}
                        onClick={() => deleteSkill(e._id)}
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

export default SkillsAdmin;
