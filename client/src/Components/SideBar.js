// Sidebar.js

// ... (imports and theme definition remain the same)
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

const SideBar = ({ userRole, activeNavItem, onNavItemClick }) => {
  const sidebarItems = getSidebarItems(userRole);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack align="start" spacing={3} p={4} bg="#2C5282" color="white" h="120vh" w="270px" position="fixed" left={0} top={20}>
        {sidebarItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            activeNavItem={activeNavItem}
            onClick={() => onNavItemClick(item.to)}
          >
            {item.label}
          </NavItem>
        ))}
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

const getSidebarItems = (userRole) => {
  switch (userRole) {
    case 'companyLeader':
      return [
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/manage-points', label: 'Manage Points' },
        { to: '/manage-account-managers', label: 'Manage Account Managers' },
        { to: '/view-statistics', label: 'View Statistics' },
      ];
    case 'pointLeaderTransaction':
      return [
        { to: '/grant-teller-accounts', label: 'Grant Teller Accounts' },
        { to: '/transaction-point-statistics', label: 'Transaction Point Statistics' },
        
      ];
    case 'tellerTransaction':
      return [
        { to: '/record-goods', label: 'Record Goods' },
        { to: '/create-delivery-orders', label: 'Create Delivery Orders' },
        { to: '/confirmation-arriving-at-collection', label: 'Confirmation at Collection Point' },
        { to: '/create-orders-recipient', label: 'Create Orders for Recipient' },
        { to: '/confirmation-delivered-recipient', label: 'Confirmation of Delivered Goods' },
        { to: '/failed-delivery-handling', label: 'Failed Delivery Handling' },
        { to: '/statistics-transferred-rows', label: 'Statistics on Transferred Rows' },
      ];
    case 'pointLeaderGathering':
      return [
        { to: '/manage-employee-accounts', label: 'Manage Employee Accounts' },
        { to: '/gathering-point-statistics', label: 'Gathering Point Statistics' },
      ];
    case 'staffGathering':
      return [
        { to: '/confirmation-from-transaction-point', label: 'Confirmation from Transaction Point' },
        { to: '/create-delivery-orders-destination', label: 'Create Delivery Orders (Destination)' },
        { to: '/confirmation-orders-received', label: 'Confirmation of Orders Received' },
        { to: '/create-delivery-orders-destination-transaction', label: 'Create Delivery Orders (Destination Transaction)' },
      ];
    case 'customer':
      return [
        { to: '/lookup-status', label: 'Lookup Status' },
      ];
    default:
      return [];
  }
};

export default SideBar;
