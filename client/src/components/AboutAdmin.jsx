import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { updateAboutInfo } from "../service/api";

const AboutAdmin = () => {
  const [title, setTitle] = useState();
  const [aboutDescription, setAboutDriscription] = useState();
  const [resume, setResume] = useState();

  const res = useSelector((state)=>state.profile.data);
  useEffect(()=>{
      setTitle(res[0].about.title);
      setAboutDriscription(res[0].about.description);
  },[res])

  const updateAbout = async() =>{
    const data = new FormData();
    data.append("title",title)
    data.append("description",aboutDescription)
    data.append("file",resume);
    await updateAboutInfo(data);
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
              About
            </Heading>
            <FormControl>
              <FormLabel>Title : </FormLabel>
              <Input
                type={"text"}
                placeholder={"Enter the Title"}
                onChange={(e) => setTitle(e.target.value)}
                value={title ? title : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description : </FormLabel>
              <Textarea
                placeholder={"Enter about Yourself"}
                rows={10}
                onChange={(e) => setAboutDriscription(e.target.value)}
                value={aboutDescription ? aboutDescription : ""}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Resume : </FormLabel>
              <Input
                type={"file"}
                p={"1"}
                onChange={(e) => setResume(e.target.files[0])}
              />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={updateAbout}
            >
              Update
            </Button>
          </VStack>
        </Container>
      </Center>
    </>
  );
};

export default AboutAdmin;
