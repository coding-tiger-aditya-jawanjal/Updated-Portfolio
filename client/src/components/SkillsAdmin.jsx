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

const SkillsAdmin = () => {
  const [skillLogo, setSkillLogo] = useState();
  const [skillName, setSkillName] = useState();

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
              <Input type={"file"} p={"1"} />
            </FormControl>
            <FormControl>
              <FormLabel>Name : </FormLabel>
              <Input type={"text"} placeholder={"Enter the Skill Name"} />
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

export default SkillsAdmin;
