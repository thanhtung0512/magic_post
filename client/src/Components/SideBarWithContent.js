// SideBarWithContent.js
import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import SideBar from './SideBar';
import ContentPage from './ContentPage';

const SideBarWithContent = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <Flex>
      <SideBar userRole="pointLeaderTransaction" activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick} />
      <ContentPage title={activeNavItem} />
    </Flex>
  );
};

export default SideBarWithContent;
