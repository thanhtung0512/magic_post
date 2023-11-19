// MainLayout.js
import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import HeaderBar from "../Components/HeaderBar";
import SideBarWithContent from "../Components/SideBarWithContent";

const MainLayout = () => {
  const [userName, setUserName] = useState("John Doe"); // Replace with your state logic
  const [role, setRole] = useState("companyLeader"); // Replace with your state logic

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  return (
    <>
      <HeaderBar role={role} userName={userName} onLogout={handleLogout} />

      <SideBarWithContent />
    </>
  );
};

export default MainLayout;
