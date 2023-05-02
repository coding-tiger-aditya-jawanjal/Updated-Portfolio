import {
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllData } from "../service/api";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [resume, setResume] = useState();

  const fetchApi = async () => {
    const data = await getAllData();
    const info = data[0].about;
    setTitle(info.title);
    setDescription(info.description);
    setResume(info.resume);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Stack gap={5} alignItems={"center"} mb={"16"}>
        <Heading
          as={"h2"}
          fontFamily={"cursive"}
          fontWeight={"bold"}
          fontSize={"2.5rem"}
          color={"red.400"}
          pt={"8"}
        >
          About Me
        </Heading>
        <Container
          maxW={{ base: "container.sm", md: "container.lg" }}
          border={"2px solid blue"}
          bgColor={"honeydew"}
          p={{ base: "6", md: "14" }}
          borderTopRightRadius={{ base: "none", md: "full" }}
          borderBottomRightRadius={{ base: "none", md: "full" }}
        >
          <Stack gap={3} pr={{ base: "8", md: "16" }}>
            <Text
              fontSize={"2rem"}
              fontWeight={"bold"}
              fontStyle={"oblique"}
              noOfLines={1}
            >
              {title}
            </Text>
            <Text
              textAlign={"justify"}
              fontSize={"1.1rem"}
              noOfLines={6}
              wordBreak={"break-word"}
            >
              {description}
            </Text>
            <HStack justifyContent={"space-between"}>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Button size={"lg"} bgColor={"linkedin.100"}>
                  My Resume
                </Button>
              </a>
              <Text
                as={"button"}
                textColor={"red.700"}
                pb={"2"}
                borderBottom={"2px solid blue"}
                fontSize={"1.2rem"}
                onClick={onOpen}
              >
                Read More...
              </Text>
            </HStack>
          </Stack>
        </Container>
      </Stack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{
          base: "sm",
          sm: "xl",
          md: "3xl",
          lg: "4xl",
          xl: "6xl",
          "2xl": "6xl",
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" bgColor={"red.300"}>
                My Resume
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default About;
