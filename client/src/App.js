// App.js
import React from "react";
import MainLayout from "./Screens/MainLayout";
import HeaderBar from "./Components/HeaderBar";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MainLayout />} />
        <Route path="/manage-points" element={<MainLayout />} />
        <Route path="/manage-account-managers" element={<MainLayout />} />
        <Route path="/view-statistics" element={<MainLayout />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
