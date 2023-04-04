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

const ContactsAdmin = () => {
  const [contactApp, setContactApp] = useState();
  const [contactHref, setContactHref] = useState();
  const [contactPic, setContactPic] = useState();

  const updateContacts = () => {};

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
              Contact
            </Heading>
            <FormControl>
              <FormLabel>Title : </FormLabel>
              <Input
                type={"text"}
                placeholder={"Enter the Title"}
                onChange={(e) => setContactApp(e.target.value)}
                value={contactApp ? contactApp : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>href : </FormLabel>
              <Input
                type={"text"}
                placeholder={"Enter the Title"}
                onChange={(e) => setContactHref(e.target.value)}
                value={contactHref ? contactHref : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Logo : </FormLabel>
              <Input
                type={"file"}
                p={"1"}
                onChange={(e) => setContactPic(e.target.files[0])}
              />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={updateContacts}
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
              <Th>Title</Th>
              <Th>Href</Th>
              <Th>Logo</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1.</Td>
              <Td>Google</Td>
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

export default ContactsAdmin;
