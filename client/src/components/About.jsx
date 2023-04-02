import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Center>
        <Box id="about" mt={"600px"} mb={"100px"}>
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
          >
            <Center fontSize={"3xl"} mb={"5"}>
              Full stack web developer
            </Center>
            <Center textAlign={"justify"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sit qui dolorum deleniti, ex sunt. Dignissimos deleniti
              quibusdam necessitatibus nam? Consequatur reprehenderit et beatae
              fugiat dignissimos sunt adipisci dolorum vitae tenetur, fugit rem
              cumque asperiores voluptatem quae, sapiente minus laborum iusto
              accusamus quod. Quisquam, sunt quam molestias deserunt praesentium
              aliquid!
            </Center>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default About;
