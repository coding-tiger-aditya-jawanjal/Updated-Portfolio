import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

const Contact = () => {
  const List = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  return (
    <>
      <Box id="contact"  pt={"300px"} mb={"100px"}  >
        <Center>
          <Heading as={"h2"} fontFamily={"cursive"} mb={"14"} color={"bisque"}>
            Contact Me
          </Heading>
        </Center>
          <HStack
            wrap={"wrap"}
            justifyContent={"center"}
            gap={10}
            p={"10"}
          >
            {List.map((e) => {
              return (
                <>
                  <Center>
                    <VStack
                      key={e.id}
                      p={"14"}
                      gap={2}
                      bgColor={"honeydew"}
                      borderRadius={"50px"}
                    >
                      <Heading color={"linkedin.400"}>Email</Heading>
                      <Image
                        src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png"
                        w={"20"}
                        h={"20"}
                      />
                      <Button
                        type={"button"}
                        size={"lg"}
                        bgColor={"whatsapp.100"}
                      >
                        Send Email
                      </Button>
                    </VStack>
                  </Center>
                </>
              );
            })}
          </HStack>
      </Box>
    </>
  );
};

export default Contact;
