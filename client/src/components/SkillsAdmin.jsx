import React, { useState } from "react";
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
import {TbEdit } from "react-icons/tb";
import {MdDelete } from "react-icons/md";

const SkillsAdmin = () => {
  const [skillLogo, setSkillLogo] = useState();
  const [skillName, setSkillName] = useState();

  const updateSkills = () =>{}

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
              <Input type={"file"} p={"1"} onChange={(e)=>setSkillLogo(e.target.files[0])} />
            </FormControl>
            <FormControl>
              <FormLabel>Name : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Skill Name"} onChange={(e)=>setSkillName(e.target.value)} value={skillName ? skillName : ""} />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={updateSkills}
            >
              Update
            </Button>
          </VStack>
        </Container>
      </Center>
      <TableContainer mt={"16"}>
        <Table variant={"striped"} >
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
                <Tr>
                    <Td>1.</Td>
                    <Td>React.js</Td>
                    <Td>pic</Td>
                    <Td><TbEdit size={"24"}/> </Td>
                    <Td><MdDelete size={"24"}/></Td>
                </Tr>
            </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SkillsAdmin;
