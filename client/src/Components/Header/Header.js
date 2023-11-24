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
import style from "./Header.module.css";
import SearchBar from "../SearchBar";
import AuthService from "../../services/auth.service";
const theme = extendTheme({
  colors: {
    brand: {
      500: "teal", // Blue color
    },
  },
});

const Header = ({ role, userName, onLogout }) => {
  return (
    <Flex
      as="header"
      // align="center"
      // justify="space-between"
      p={4}
      // height="80px"
      // bg="white"
      // borderBottom="3px solid teal" // Blue color
      rounded="md"
      boxShadow="md" // Add box shadow for a subtle lift
      className={style.container}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Text fontSize="xl" fontWeight="bold" _hover={{ color: "teal" }}>
          MagicPost
        </Text>
      </Link>
      <Flex className={style.SearchBar}>
        <SearchBar />
      </Flex>
      <Flex className={style.userSet}>
        <Text mx={2} fontWeight="bold" color="teal" className={style.userName}>
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

export default Header;
