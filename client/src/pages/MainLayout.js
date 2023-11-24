// MainLayout.js
import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
// import HeaderBar from "../Components/HeaderBar";
import { Header } from "../Components";
import SideBarWithContent from "../Components/SideBarWithContent";

import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
const MainLayout = () => {
  const navigate = useNavigate();
  const currentUserr = AuthService.getCurrentUser();
  const [userName, setUserName] = useState(currentUserr.username); // Replace with your state logic
  const [role, setRole] = useState("companyLeader"); // Replace with your state logic
  const [currentUser, setCurrentUser] = useState(undefined);
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    AuthService.logout();
    setCurrentUser(undefined);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Header role={role} userName={userName} onLogout={handleLogout} />
      <SideBarWithContent />
    </>
  );
};

export default MainLayout;
