import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Link as ChakraLink,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return <div>This field is required!</div>;
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          setLoading(false);
          setMessage("Signed in successfully");
          setTimeout(() => {
            setMessage("");
            navigate("/");
            window.location.reload();
          }, 2000); // Display success message for 2 seconds
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

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
        <Heading mb={4}>Login</Heading>

        <Form onSubmit={handleLogin} ref={form}>
          <FormControl mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            type="submit"
            width="full"
            disabled={loading}
          >
            {loading ? (
              <>
                Signing you in... <Spinner size="sm" ml={2} />
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          {message && (
            <Flex justifyContent="center" alignItems="center" mt={2}>
              <Text color="teal" fontSize="md">
                {message}
              </Text>
            </Flex>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>

        <Box mt={4}>
          Don't have an account?{" "}
          <ChakraLink color="teal" href="/register">
            Register here.
          </ChakraLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
