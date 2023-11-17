// SideBarWithContent.js
import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import SideBar from "./SideBar";
import ContentPage from "./ContentPage";

const SideBarWithContent = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <Flex>
      <Box
        display={{ base: "none", md: "block" }} // Hide on small screens, show on medium and larger screens
      >
        <SideBar
          userRole="companyLeader"
          activeNavItem={activeNavItem}
          onNavItemClick={handleNavItemClick}
        />
      </Box>
      <ContentPage title={activeNavItem} flex="1" />
    </Flex>
  );
};

export default SideBarWithContent;
