import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Stack
        bgImage={
          "url('/background-pic.jpg')"
        }
        w={"full"}
        h={"85vh"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        justifyContent={"center"}
        placeItems={"end"}
      >
        <Heading
          color={"whiteAlpha.900"}
          p={{ base: "4", md: "16" }}
          fontSize={{ base: "3.5rem", sm: "5rem" }}
          fontStyle={"oblique"}
          fontFamily={"heading"}
        >
          Aditya Jawanjal
        </Heading>
      </Stack>

      <Stack
        pt={"24"}
        gap={28}
        pb={"20"}
        bgImage={
          "url('/background-pic.jpg')"
        }
        w={"full"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Skills />
        <Contact />
      </Stack>
    </>
  );
};

export default Home;
