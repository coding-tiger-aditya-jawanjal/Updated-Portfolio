import React, { useEffect } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import Pic from "./Pic";
import { getAllData } from "./service/api";
import { useDispatch } from "react-redux";
import { allData } from "./service/ProfileSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async () =>{
     const result = await getAllData();
      dispatch(allData(result));
      console.log(result);
    }
    fetchData();
  },[dispatch])
  return (
    <>
      <BrowserRouter>
        <Stack minH={"100vh"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pic" element={<Pic/>} />

            <Route path="/projects" element={<Projects/> } />
            <Route path="/admin" element={<AdminLogin/> } />
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
