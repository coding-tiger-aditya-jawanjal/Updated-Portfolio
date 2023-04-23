import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { profile } from "../App";

const Contact = () => {
  const List = useContext(profile).data.contacts;
  // const List = [
  //   {
  //     id: 1,
  //   },
  //   {
  //     id: 2,
  //   },
  //   {
  //     id: 3,
  //   },
  //   {
  //     id: 4,
  //   },
  //   {
  //     id: 5,
  //   },
  //   {
  //     id: 6,
  //   },
  //   {
  //     id: 7,
  //   },
  //   {
  //     id: 8,
  //   },
  //   {
  //     id: 9,
  //   },
  // ];
  return (
    <>
      <Box id="contact" pt={"300px"} mb={"100px"}>
        <Center>
          <Heading as={"h2"} fontFamily={"cursive"} mb={"14"} color={"bisque"}>
            Contact Me
          </Heading>
        </Center>
        <HStack
          wrap={"wrap"}
          gap={10}
          justifyContent={{ base: "center", md: "flex-start" }}
          pl={{md:"10" ,lg:"14"}}
        >
          {List.map((e) => {
            return (
              <>
                <Stack
                  key={e.id}
                  p={"14"}
                  gap={2}
                  bgColor={"honeydew"}
                  borderRadius={"50px"}
                  alignItems={"center"}
                >
                  <Heading color={"linkedin.400"}>Email</Heading>
                  <Image
                    src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png"
                    w={"20"}
                    h={"20"}
                  />
                  <Button type={"button"} size={"lg"} bgColor={"whatsapp.100"}>
                    Send Email
                  </Button>
                </Stack>
              </>
            );
          })}
        </HStack>
      </Box>
    </>
  );
};

export default Contact;
