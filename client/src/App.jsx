import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Admin from "./components/Admin";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Stack minH={"100vh"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/> } />
            <Route path="/admin" element={<Admin/> } />
            <Route path="/control" element={<AdminPanel/> } />
          </Routes>
          <Box position={"absolute"} bottom={"0.5"} w={"full"}>
            <Footer />
          </Box>
        </Stack>
      </BrowserRouter>
    </>
  );
};

export default App;
