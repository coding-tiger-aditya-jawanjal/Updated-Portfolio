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

const ContactsAdmin = () => {
  const [contactApp, setContactApp] = useState();
  const [contactHref, setContactHref] = useState();
  const [contactPic, setContactPic] = useState();

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
              <Input type={"text"} placeholder={"Enter the Title"} />
            </FormControl>
            <FormControl>
              <FormLabel>href : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} />
            </FormControl>
            <FormControl>
              <FormLabel>Logo : </FormLabel>
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

export default ContactsAdmin;
