// HeaderBar.js
import React from "react";
import {
  Flex,
  Input,
  Button,
  Text,
  ChakraProvider,
  CSSReset,
  extendTheme,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#3182CE", // Blue color
    },
  },
});

const HeaderBar = ({ role, userName, onLogout }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      height="80px"
      bg="white"
      borderBottom="2px solid #3182CE" // Blue color
      rounded="md"
      boxShadow="md" // Add box shadow for a subtle lift
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Text fontSize="xl" fontWeight="bold" _hover={{ color: "#3182CE" }}>
          MagicPost
        </Text>
      </Link>
      <Flex align="center" flex="1" justify="center">
        {" "}
        {/* Center the contents */}
        <Input
          type="text"
          placeholder="Search..."
          mx="auto" // Center the search bar
          w="50%" // Set the width to 50%
          rounded="full"
          borderColor="#3182CE"
          _focus={{ borderColor: "#3182CE", boxShadow: "0 0 0 2px #3182CE" }} // Add a subtle box shadow on focus
        />
        <Text mx={2} fontWeight="bold" color="#3182CE">
          {userName}
        </Text>
        <Button
          onClick={onLogout}
          rounded="full"
          bg="#3182CE"
          color="white"
          _hover={{ bg: "#2C5282" }}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderBar;
