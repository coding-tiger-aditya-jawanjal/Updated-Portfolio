import React, { useContext, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { addContact, deleteTheContact, updateTheContact } from "../service/api";
import { profile } from "../App";

const ContactsAdmin = () => {
  const contactHook = useContext(profile).data.contacts;

  const [contactApp, setContactApp] = useState();
  const [contactHref, setContactHref] = useState();
  const [contactPic, setContactPic] = useState();
  const [contacts , setContacts] = useState([]);
  const [id , setId] = useState();
  const [toggle , setToggle] = useState(false);

  // const res = useSelector((state)=>state.profile.data[0].contacts);
  useEffect(()=>{
    setContacts(contactHook);
  },[contactHook])

  const addNewContact = async () => {
    const data = new FormData();
    data.append("file", contactPic);
    data.append("title", contactApp);
    data.append("href", contactHref);
    const result = await addContact(data);
    console.log(result);
  };

  const updateContact = async () => {
    const data = new FormData();
    data.append("file", contactPic);
    data.append("title", contactApp);
    data.append("href", contactHref);
    const all = {
      data,
      id,
    };
    console.log(all);
    await updateTheContact(all);
  };

  const editContact = (e) => {
    setContactApp(e.title);
    setContactHref(e.href);
    setContactPic(e.logo);
    setToggle(true);
    setId(e._id);
  };

  const deleteContact = async (cId) => {
    await deleteTheContact(cId);
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
            {
              toggle ?
              <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={()=>updateContact()}
            >
              Update
            </Button>
            :
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={()=>addNewContact()}
            >
              Add
            </Button>
            }
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
            {
              contacts.map((e,i)=>{
                return(
                  <Tr key={e._id}>
              <Td>{i+1}</Td>
              <Td>{e.title}</Td>
              <Td>{e.href}</Td>
              <Td>{e.logo}</Td>
              <Td>
              <Button size={"xs"}>
                      <TbEdit size={"24"} onClick={() => editContact(e)} />{" "}
                    </Button>
              </Td>
              <Td>
              <Button size={"xs"}>
                      <MdDelete
                        size={"24"}
                        onClick={() => deleteContact(e._id)}
                      />
                    </Button>
              </Td>
            </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactsAdmin;
