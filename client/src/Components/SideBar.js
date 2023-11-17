import React, { useState } from "react";
import {
  VStack,
  Button,
  ChakraProvider,
  CSSReset,
  extendTheme,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#769FCD", // Blue color
      600: "#2C5282", // Darker blue for active item
    },
  },
});

const SideBar = ({ userRole, activeNavItem, onNavItemClick }) => {
  const sidebarItems = getSidebarItems(userRole);
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack
        align="start"
        spacing={3}
        p={4}
        bg="teal"
        color="#F5F0BB"
        h="120vh"
        w={isLargerThanMD ? "270px" : "100%"}
        position="fixed"
        left={0}
        top={20}
        zIndex={999} // Ensure it overlays other content
      >
        {sidebarItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            activeNavItem={activeNavItem}
            onClick={() => onNavItemClick(item.to)}
            isLargerThanMD={isLargerThanMD} // Pass the isLargerThanMD prop
          >
            {item.label}
          </NavItem>
        ))}
      </VStack>
    </ChakraProvider>
  );
};

const NavItem = ({ to, children, activeNavItem, onClick, isLargerThanMD }) => (
  <Link to={to} style={{ textDecoration: "none", color: "white" }}>
    <Button
      w={isLargerThanMD ? "230px" : "100%"}
      textAlign="left"
      color="white"
      border={activeNavItem === to ? "2px solid white" : "none"}
      bg={activeNavItem === to ? "transparent" : "transparent"}
      _hover={{ color: "teal", bg: "white" }}
      onClick={() => onClick(to)}
    >
      {children}
    </Button>
  </Link>
);
const getSidebarItems = (userRole) => {
  switch (userRole) {
    case "companyLeader":
      return [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/manage-points", label: "Manage Points" },
        { to: "/manage-account-managers", label: "Manage Account Managers" },
        { to: "/view-statistics", label: "View Statistics" },
      ];
    case "pointLeaderTransaction":
      return [
        { to: "/grant-teller-accounts", label: "Grant Teller Accounts" },
        {
          to: "/transaction-point-statistics",
          label: "Transaction Point Statistics",
        },
      ];
    case "tellerTransaction":
      return [
        { to: "/record-goods", label: "Record Goods" },
        { to: "/create-delivery-orders", label: "Create Delivery Orders" },
        {
          to: "/confirmation-arriving-at-collection",
          label: "Confirmation at Collection Point",
        },
        {
          to: "/create-orders-recipient",
          label: "Create Orders for Recipient",
        },
        {
          to: "/confirmation-delivered-recipient",
          label: "Confirmation of Delivered Goods",
        },
        { to: "/failed-delivery-handling", label: "Failed Delivery Handling" },
        {
          to: "/statistics-transferred-rows",
          label: "Statistics on Transferred Rows",
        },
      ];
    case "pointLeaderGathering":
      return [
        { to: "/manage-employee-accounts", label: "Manage Employee Accounts" },
        {
          to: "/gathering-point-statistics",
          label: "Gathering Point Statistics",
        },
      ];
    case "staffGathering":
      return [
        {
          to: "/confirmation-from-transaction-point",
          label: "Confirmation from Transaction Point",
        },
        {
          to: "/create-delivery-orders-destination",
          label: "Create Delivery Orders (Destination)",
        },
        {
          to: "/confirmation-orders-received",
          label: "Confirmation of Orders Received",
        },
        {
          to: "/create-delivery-orders-destination-transaction",
          label: "Create Delivery Orders (Destination Transaction)",
        },
      ];
    case "customer":
      return [{ to: "/lookup-status", label: "Lookup Status" }];
    default:
      return [];
  }
};

export default SideBar;
