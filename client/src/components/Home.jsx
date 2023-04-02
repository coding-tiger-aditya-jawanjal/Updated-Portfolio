import React from "react";
import { Center, Stack } from "@chakra-ui/react";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Center
        bgImage={
          "url('https://media.istockphoto.com/id/944880340/photo/chaotic-black-low-poly-surface-abstract-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=_zTTb5QQqP9yjC1WYh1pzolYb70MEE11rVm23rxBDgo=')"
        }
        w={"full"}
        minH={"100vh"}
        bgRepeat={"no-repeat"}
        position={"relative"}
        top={"-9px"}
        bgSize={"cover"}
        zIndex={"-1"}
      >
        
        <Center
          p={"10"}
          m={"2"}
          color={"whiteAlpha.900"}
          fontSize={{ base: "5xl", md: "7xl" }}
          fontStyle={"italic"}
          textDecor={"underline"}
          position={"absolute"}
          left={{ base: "20vw", md: "60vw" }}
          top={"20vh"}
        >
          Aditya Jawanjal
        </Center>
        <Stack mb={"300px"}>
          <About />
          <Skills />
          <Contact />
        </Stack>
      </Center>
    </>
  );
};

export default Home;
