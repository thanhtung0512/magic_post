// CombinedHeaderAndSidebar.js
import React from 'react';
import { Flex } from '@chakra-ui/react';
import HeaderBar from './HeaderBar'; // Assuming the file path is correct
import SideBar from './SideBar'; // Assuming the file path is correct

const CombinedHeaderAndSidebar = () => {
  const handleLogout = () => {
    // Your logout logic here
  };

  return (
    <Flex direction="column" h="100vh">
      <HeaderBar role="companyLeader" userName="John Doe" onLogout={handleLogout} />
      <SideBar />
    </Flex>
  );
};

export default CombinedHeaderAndSidebar;
