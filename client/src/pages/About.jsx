import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { profile } from "../App";


const About = () => {
  const info = useContext(profile).data.about;

  return (
    <>
      <Center>
        <Box id="about" >
          <Center>
            <Heading
              as={"h2"}
              fontFamily={"cursive"}
              mb={"14"}
              color={"bisque"}
            >
              About Me
            </Heading>
          </Center>
          <VStack
            bgColor={"whiteAlpha.900"}
            maxW={{
              base: "full",
              sm: "container.sm",
              md: "container.md",
              lg: "container.lg",
            }}
            zIndex={"1"}
            p={{ base: "8", xl: "16" }}
            borderRightRadius={{ md: "full" }}
            gap={5}
          >
            <Center fontSize={"3xl"} mb={"5"} noOfLines={1}>
              {info.title}
            </Center>
            <Center textAlign={"justify"} noOfLines={4}>
              {info.description}
            </Center>
          
            {/* <Stack
              justifyContent={"space-between"}
              ml={"3"}
              mr={"3"}
              w={"full"}
            >
              <Button>Click Me</Button> */}
              {/* <Button
                size={"lg"}
                bgColor={"red.300"}
                fontSize={"1.2rem"}
                fontFamily={"mono"}
                zIndex={5}
               
              >
                Download Resume
              </Button> */}
              {/* <Button
                type="button"
                as={"button"}
                bgColor={"inherit"}
                fontSize={"1.2rem"}
                borderBottom={"1px solid blue"}
                pb={"1"}
                onClick={onOpen}
                
              >
                Read More...
              </Button> */}
             
              
                
              
            {/* </Stack> */}
           
          </VStack>
        </Box>
        
        
        </Center>
        {/* <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                size={{ base:"xs",sm:"sm", md:"3xl", xl:"6xl"}}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text fontWeight="bold" mb="1rem">
                      You can scroll the content behind the modal
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nam quasi esse ipsum nulla vitae cupiditate blanditiis.
                      Architecto id voluptas asperiores, odit soluta amet
                      repellat obcaecati nisi aut eligendi adipisci! Eaque nisi
                      dicta unde doloremque non doloribus totam maiores
                      obcaecati quidem.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> */}
     
      {/* Modal of Read More */}
      {/* <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              You can scroll the content behind the modal
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quasi esse ipsum nulla vitae cupiditate blanditiis. Architecto id voluptas asperiores, odit soluta amet repellat obcaecati nisi aut eligendi adipisci! Eaque nisi dicta unde doloremque non doloribus totam maiores obcaecati quidem.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default About;
