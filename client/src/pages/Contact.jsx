import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { getAllData } from "../service/api";

const Contact = () => {
  const [allContacts, setAllContacts] = useState([]);

  const fetchApi = async () => {
    const data = await getAllData();
    const info = data[0].contacts;
    setAllContacts(info);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Box id="contact">
        <Center>
          <Heading as={"h2"} fontFamily={"cursive"} mb={"14"} color={"bisque"}>
            Contact Me
          </Heading>
        </Center>
        <HStack
          wrap={"wrap"}
          gap={10}
          justifyContent={{ base: "center", md: "flex-start" }}
          pl={{ md: "10", lg: "14" }}
        >
          {allContacts.map((e) => {
            return (
              <>
                <Stack
                  key={e.id}
                  p={"10"}
                  gap={2}
                  bgColor={"honeydew"}
                  borderRadius={"50px"}
                  alignItems={"center"}
                  w={"72"}
                  h={"72"}
                >
                  <Heading
                    color={"linkedin.400"}
                    noOfLines={1}
                    fontSize={"1.5rem"}
                  >
                    {e.title}
                  </Heading>
                  <Image src={e.logo} w={"32"} h={"20"} borderRadius={"2xl"} />
                  <a href={e.href}>
                    <Button
                      type={"button"}
                      size={"lg"}
                      bgColor={"whatsapp.100"}
                    >
                      Message
                    </Button>
                  </a>
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
