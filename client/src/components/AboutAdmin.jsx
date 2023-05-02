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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { getAllData, updateAboutInfo } from "../service/api";

const AboutAdmin = () => {
  const [title, setTitle] = useState();
  const [aboutDescription, setAboutDriscription] = useState();
  const [resume, setResume] = useState();
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    const data = await getAllData();
    setLoading(false);
    const info = data[0].about;
    setTitle(info.title);
    setAboutDriscription(info.description);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const updateAbout = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("title", title);
    data.append("description", aboutDescription);
    data.append("file", resume);
    await updateAboutInfo(data);
    fetchApi();
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
