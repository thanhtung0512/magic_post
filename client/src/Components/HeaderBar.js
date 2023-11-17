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
      500: "teal", // Blue color
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
      borderBottom="3px solid teal" // Blue color
      rounded="md"
      boxShadow="md" // Add box shadow for a subtle lift
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Text fontSize="xl" fontWeight="bold" _hover={{ color: "teal" }}>
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
          borderColor="teal"
          _focus={{ borderColor: "teal", boxShadow: "0 0 0 3px teal" }} // Add a subtle box shadow on focus
        />
        <Text mx={2} fontWeight="bold" color="teal">
          {userName}
        </Text>
        <Button
          onClick={onLogout}
          rounded="full"
          bg="teal"
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
