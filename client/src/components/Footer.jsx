import React from "react";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Center h={"24"} bgColor={"linkedin.100"}>
        <Link to={"/admin"}>All the &copy; copyrights are reserved.</Link>
      </Center>
    </>
  );
};

export default Footer;
