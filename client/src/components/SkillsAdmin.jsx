import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
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
import { addSkill, deleteTheSkill, updateTheSkill } from "../service/api";
import { useSelector } from "react-redux";

const SkillsAdmin = () => {
  const [logo, setLogo] = useState();
  const [name, setName] = useState();
  const [skills, setSkills] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState();

  const res = useSelector((state) => state.profile.data[0].skills);

  useEffect(() => {
    setSkills(res);
  }, [res]);

  const addNewSkill = async () => {
    const data = new FormData();
    data.append("file", logo);
    data.append("name", name);
    const result = await addSkill(data);
    console.log(result);
  };

  const updateSkill = async () => {
    const data = new FormData();
    data.append("file", logo);
    data.append("name", name);
    const all = {
      data,
      id,
    };
    console.log(all);
    await updateTheSkill(all);
  };

  const editSkill = (e) => {
    setName(e.name);
    setToggle(true);
    setId(e._id);
  };
  
  const deleteSkill = async (sId) => {
    await deleteTheSkill(sId);
  };

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
            {skills.map((e, i) => {
              return (
                <Tr key={e._id}>
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
