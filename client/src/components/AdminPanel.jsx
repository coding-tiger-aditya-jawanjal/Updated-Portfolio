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
  Textarea,
} from "@chakra-ui/react";

const AdminPanel = () => {
  return (
    <>
      <Heading textAlign={"center"} as={"h2"}>
        Make Changes
      </Heading>
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
              Home
            </Heading>
            <FormControl>
              <FormLabel>Photo : </FormLabel>
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
              About
            </Heading>
            <FormControl>
              <FormLabel>Title : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Title"} />
            </FormControl>
            <FormControl>
              <FormLabel>Description : </FormLabel>
              <Textarea placeholder={"Enter about Yourself"} />
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
             <Input type={"file"} p={"1"}/>
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

export default AdminPanel;
