import React, { useState } from 'react';
import { VStack, Button, ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#769FCD', // Blue color
      600: '#2C5282', // Darker blue for active item
    },
  },
});

const SideBar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack align="start" spacing={3} p={4} bg="#2C5282" color="white" h="120vh" w="270px" position="fixed" left={0} top={20}>
        <NavItem to="/dashboard" activeNavItem={activeNavItem} onClick={() => handleNavItemClick('dashboard')}>
          Dashboard
        </NavItem>
        <NavItem to="/manage-points" activeNavItem={activeNavItem} onClick={() => handleNavItemClick('manage-points')}>
          Manage Points
        </NavItem>
        <NavItem to="/manage-account-managers" activeNavItem={activeNavItem} onClick={() => handleNavItemClick('manage-account-managers')}>
          Manage Account Managers
        </NavItem>
        <NavItem to="/view-statistics" activeNavItem={activeNavItem} onClick={() => handleNavItemClick('view-statistics')}>
          View Statistics
        </NavItem>
        {/* Add more NavItems as needed */}
      </VStack>
    </ChakraProvider>
  );
};

const NavItem = ({ to, children, activeNavItem, onClick }) => (
  <Link to={to} style={{ textDecoration: 'none', color: 'white' }}>
    <Button
      w="230px"
      textAlign="left"
      color="white"
      bg={activeNavItem === to ? '#2C5282' : 'transparent'}
      _hover={{ color: '#D6E6F2', bg: '#769FCD' }}
      onClick={() => onClick(to)}
    >
      {children}
    </Button>
  </Link>
);

export default SideBar;
