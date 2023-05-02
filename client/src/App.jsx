import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Stack minH={"100vh"} justifyContent={"space-between"}>
          <Box>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/about" element={<About />} />
              <Route path="/control" element={<AdminPanel />} />
            </Routes>
          </Box>
          <Box w={"full"}>
            <Footer />
          </Box>
        </Stack>
      </BrowserRouter>
    </>
  );
};

export default App;
