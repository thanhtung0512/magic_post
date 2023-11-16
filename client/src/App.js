// App.js
import React from "react";
import MainLayout from "./Screens/MainLayout";
import HeaderBar from "./Components/HeaderBar";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { Route, Routes } from "react-router-dom";
import MapWithMarkers from "./Components/MapWithMarkers";
import GrantTellerAccount from "./Components/RoleContent/PointLeaderTransaction/GrantTellerAccount";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MainLayout />} />
        <Route path="/" element={<MainLayout />} />
        <Route path="/manage-points" element={<MainLayout />} />
        <Route path="/manage-account-managers" element={<MainLayout />} />
        <Route path="/view-statistics" element={<MainLayout />} />
        <Route path="/grant-teller-accounts" element={<MainLayout />} />
        
      </Routes>
    </ChakraProvider>
  );
}

export default App;
