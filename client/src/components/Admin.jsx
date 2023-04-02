import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";

const Admin = () => {
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
            <Heading textAlign={"center"} as={"h2"}>
              Admin Panel
            </Heading>
            <FormControl isRequired>
              <FormLabel>Name : </FormLabel>
              <Input type={"text"} placeholder={"Enter Your Name"} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email : </FormLabel>
              <Input type={"email"} placeholder={"Enter Your Email"} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password : </FormLabel>
              <Input type={"password"} placeholder={"Enter Your Password"} />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
            >
              Log in
            </Button>
          </VStack>
        </Container>
      </Center>
    </>
  );
};

export default Admin;
