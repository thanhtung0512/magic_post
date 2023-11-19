// Homepage.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  ChakraProvider,
  CSSReset,
  extendTheme,
} from "@chakra-ui/react";
import HeaderBar from "../Components/HeaderBar";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#3182CE", // Blue color
    },
  },
});

const Homepage = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />

      <Box p={8}>
        <Heading mb={4}>Welcome to MagicPost Delivery System</Heading>
        <Text>
          MagicPost is a leading delivery company with a nationwide network of
          transaction points and gathering points. Our efficient system ensures
          reliable and timely delivery of goods from senders to recipients.
        </Text>
        {/* Add more content as needed */}
      </Box>
      {/* Add additional components or sections for different user roles */}
    </ChakraProvider>
  );
};

export default Homepage;
