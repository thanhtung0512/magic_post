import React, { useState } from "react";
import {
  VStack,
  Button,
  ChakraProvider,
  CSSReset,
  extendTheme,
  useMediaQuery,
  Text,
  color,
  Center,
  background,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import style from "./SideBarCT.module.css";
import AuthService from "../../services/auth.service";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#769FCD", // Blue color
      600: "#2C5282", // Darker blue for active item
    },
  },
});

const functionPositon = () => {};

const SideBarCT = ({ userRole, activeNavItem, onNavItemClick }) => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = getSidebarItems(userRole);

  const toggleSidebar = () => {
    onNavItemClick(activeNavItem, !isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
    // Pass isSidebarOpen to the parent component through onNavItemClick
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack
        align="start"
        spacing={3}
        p={4}
        paddingTop="50px"
        borderRadius="8px"
        bg="teal"
        color="black"
        h="120vh"
        w={isLargerThanMD ? "270px" : "100%"}
        position="fixed"
        top="80px"
        left={isSidebarOpen ? "0px" : "-270px"}
        zIndex={999} // Ensure it overlays other content
        transition="left 0.3s ease-in-out"
      >
        <Button
          onClick={toggleSidebar}
          position="absolute"
          bg="teal"
          left={isSidebarOpen ? "0px" : "270px"}
          top="0px"
          width="40px"
          height="40px"
          fontSize='24px'
          color='white'
          _hover={{
            backgroundColor: 'white',
            border: '3px solid teal',
            color:'teal'
          }}
        animation='0.3s'
        transition="left 0.3s ease-in-out"


        >
          {isSidebarOpen ? "←" : "→"}
          {/* <p className={style.arrow}>{isSidebarOpen ? "←" : "→"}</p> */}
        </Button>
        {sidebarItems.map((item) => (
          <NavItem
            key={item.to}
            top="30px"
            to={item.to}
            activeNavItem={activeNavItem}
            onClick={() => onNavItemClick(item.to, isSidebarOpen)}
            isLargerThanMD={isLargerThanMD}
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
  const currentUser = AuthService.getCurrentUser();
  const currentRole = currentUser.roles[0];
  console.log(currentRole);
  switch (currentRole) {
    case "ROLE_BOSS":
      userRole = "companyLeader";
      break;
    case "ROLE_POINTLEADER":
      userRole = "pointLeaderTransaction";
      break;
    case "ROLE_CUSTOMER":
      userRole = "customer";
      break;
    // Other role logic
    case "ROLE_POINTLEADER":
      userRole = "pointLeaderTransaction";
      break;
    case "ROLE_STAFF":
      userRole = "staffGathering";
      break;
  }
  switch (userRole) {
    case "companyLeader":
      return [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/manage-points", label: "Manage Points" },
        { to: "/manage-account-managers", label: "Manage Account Managers" },
        { to: "/view-statistics", label: "View Statistics" },
        { to: "/profile", label: "Profile" },
      ];
    case "pointLeaderTransaction":
      return [
        { to: "/grant-teller-accounts", label: "Grant Teller Accounts" },
        {
          to: "/transaction-point-statistics",
          label: "Transaction Point Statistics",
        },
        {
          to: "/profile",
          label: "Profile",
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
        {
          to: "/profile",
          label: "Profile",
        },
      ];
    case "pointLeaderGathering":
      return [
        { to: "/manage-employee-accounts", label: "Manage Employee Accounts" },
        {
          to: "/gathering-point-statistics",
          label: "Gathering Point Statistics",
        },
        {
          to: "/profile",
          label: "Profile",
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
        {
          to: "/profile",
          label: "Profile",
        },
      ];
    case "customer":
      return [
        { to: "/lookup-status", label: "Lookup Status" },
        {
          to: "/profile",
          label: "Profile",
        },
      ];
    default:
      return [];
  }
};

export default SideBarCT;
