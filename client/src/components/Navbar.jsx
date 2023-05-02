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

  const auth = localStorage.getItem("admin");

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <HStack
        bgColor={"teal.100"}
        h={"32"}
        w={"full"}
        p={"5"}
        top={"0"}
        zIndex={2}
        pos={"sticky"}
      >
        <HStack maxW={"container.xl"}>
          <Image
            src="/logo.jpg"
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
              <NavHashLink to={"/about"} smooth={true}>
                About
              </NavHashLink>
              <NavHashLink to={"/#skills"} smooth={true}>
                Skills
              </NavHashLink>
              <HashLink to={"/#contact"} smooth={true}>
                Contact
              </HashLink>
              <Link to={"/projects"}>Projects</Link>

              {auth ? (
                <>
                  <Link onClick={logout}>Logout</Link>
                  <Link to={"/control"}>Control</Link>
                </>
              ) : (
                <></>
              )}
              <Avatar
                size={"lg"}
                name="Aditya Jawanjal"
                src="/profile-pic.png"
              />
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
            <Stack gap={5} ml={"5"} onClick={onClose}>
              <Link to={"/"}>Home</Link>
              <HashLink to={"/about"}>About</HashLink>
              <HashLink to={"/#skills"}>Skills</HashLink>
              <HashLink to={"/#contact"}>Contact</HashLink>
              <Link to={"/projects"}>Projects</Link>
              {auth ? (
                <>
                  <Link onClick={logout}>Logout</Link>
                  <Link to={"/control"}>Control Panel</Link>
                </>
              ) : (
                <></>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter>Created By : Aditya Jawanjal</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
