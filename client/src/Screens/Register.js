import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      {/* Logo */}
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        MagicPost
      </Text>
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={4}>Register</Heading>
        <form>
          <FormControl mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <Button colorScheme="blue" type="submit" width="full">
            Sign Up
          </Button>
        </form>
        <Box mt={4}>
          Already have an account?{" "}
          <ChakraLink color="#769FCD" href="/login">
            Login here.
          </ChakraLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
