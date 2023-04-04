import React from "react";
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        bgColor={"teal.100"}
        h={"32"}
        w={"full"}
        p={"5"}
        position={{ sm: "none", md: "sticky" }}
        top={"0"}
        zIndex={2}
      >
        <HStack maxW={"container.xl"}>
          <Image
            src="https://media.istockphoto.com/id/1331995491/vector/aj-logo-design-initial-aj-letter-logo-design-vector-template.jpg?s=170667a&w=0&k=20&c=HI6lKRmj2rmNsIdb10FB4X8_rRJFV_9Zyvlu9giXwq8="
            w={"24"}
            h={"24"}
            borderRadius={"full"}
          />
          <Heading pl={{ base: "0", sm: "5" }}>Portfolio</Heading>
          <HStack
            fontSize={"larger"}
            fontWeight={"bold"}
            position={"absolute"}
            right={"14"}
          >
            <HStack display={{ base: "none", lg: "flex" }} gap={5}>
              <Link to={"/"}>Home</Link>
              <NavHashLink to={"/#about"} smooth={true}>
                About
              </NavHashLink>
              <NavHashLink to={"/#skills"} smooth={true}>
                Skills
              </NavHashLink>
              <HashLink to={"/#contact"} smooth={true}>
                Contact
              </HashLink>
              <Link to={"/projects"}>Projects</Link>
              <Link to={"/control"}>Control</Link>
              <Link to={"/admin"}>
                <Avatar
                  size={"lg"}
                  name="Aditya Jawanjal"
                  src="https://static-cse.canva.com/blob/975732/1600w-EW4cggXkgbc.jpg"
                />
              </Link>
            </HStack>
            <Box display={{ base: "flex", lg: "none" }}>
              <GiHamburgerMenu size={42} onClick={onOpen} />
            </Box>
          </HStack>
        </HStack>
      </HStack>
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        fontSize={"larger"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader mb={"5"}>Visit more pages</DrawerHeader>
          <DrawerBody>
            <Stack gap={5} ml={"5"}>
              <Link to={"/"} onClick={onClose}>
                Home
              </Link>
              <HashLink to={"/#about"} onClick={onClose}>
                About
              </HashLink>
              <HashLink to={"/#skills"} onClick={onClose}>
                Skills
              </HashLink>
              <HashLink to={"/#contact"} onClick={onClose}>
                Contact
              </HashLink>
              <Link to={"/projects"} onClick={onClose}>
                Projects
              </Link>
              <Link to={"/admin"} onClick={onClose}>
                Profile
              </Link>
              <Link to={"/control"} onClick={onClose}>
                Control Panel
              </Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter>Created By : Aditya Jawanjal</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
