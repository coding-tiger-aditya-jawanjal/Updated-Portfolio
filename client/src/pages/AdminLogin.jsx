import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Center,
  Heading,
} from "@chakra-ui/react";
import { adminLogin } from "../service/api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const auth = localStorage.getItem("admin");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const result = await adminLogin(data);
    if (result) {
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/");
      window.location.reload();
    } else {
      localStorage.clear();
    }
  };
  return (
    <>
      <Center>
        <Container maxW={"container.md"} mt={"5"} mb={"150px"}>
          <VStack
            gap={4}
            border={"2px solid red"}
            p={"4"}
            bgColor={"honeydew"}
            borderRadius={"3xl"}
            pb={"8"}
          >
            <Heading textAlign={"center"} as={"h2"}>
              Admin Panel
            </Heading>
            <FormControl isRequired>
              <FormLabel>Email : </FormLabel>
              <Input
                type={"email"}
                placeholder={"Enter Your Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password : </FormLabel>
              <Input
                type={"password"}
                placeholder={"Enter Your Password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              w={"full"}
              bgColor={"whatsapp.100"}
              type={"submit"}
              fontSize={"larger"}
              onClick={handleLogin}
            >
              Log in
            </Button>
          </VStack>
        </Container>
      </Center>
    </>
  );
};

export default AdminLogin;
