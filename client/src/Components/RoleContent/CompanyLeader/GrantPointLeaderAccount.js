import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select, // Import Select component
} from "@chakra-ui/react";

const GrantPointLeaderAccount = () => {
  const [newTeller, setNewTeller] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [editTeller, setEditTeller] = useState(null);
  const [tellers, setTellers] = useState([
    { id: 1, name: "John Doe", username: "john_doe", password: "********" },
    { id: 2, name: "Jane Doe", username: "jane_doe", password: "********" },
    // Add more tellers as needed
  ]);

  const [transactionPoints, setTransactionPoints] = useState([]);
  const [gatheringPoints, setGatheringPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    // Fetch data from APIs
    fetch("http://localhost:8080/api/transaction-points")
      .then((response) => response.json())
      .then((data) => setTransactionPoints(data));

    fetch("http://localhost:8080/api/gathering-points")
      .then((response) => response.json())
      .then((data) => setGatheringPoints(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeller((prevTeller) => ({ ...prevTeller, [name]: value }));
  };
  const handleSelectPoint = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue)
    setSelectedPoint(selectedValue !== "" ? parseInt(selectedValue) : null);
  };
  const handleGrantAccount = () => {
    // Add validation logic here
    if (
      !newTeller.name ||
      !newTeller.username ||
      !newTeller.password ||
      !selectedPoint
    ) {
      // Handle validation error, maybe show an alert or toast message
      return;
    }

    // Add logic to send the new teller data to the server or update state as needed
    // For now, let's just add it to the local state
    if (editTeller) {
      // If editing an existing teller, update the existing entry
      setTellers((prevTellers) =>
        prevTellers.map((teller) =>
          teller.id === editTeller.id ? { ...newTeller, id: teller.id } : teller
        )
      );
      setEditTeller(null);
    } else {
      // If adding a new teller, add it to the local state
      setTellers((prevTellers) => [
        ...prevTellers,
        { ...newTeller, id: prevTellers.length + 1, point: selectedPoint },
      ]);
    }

    // Reset the form
    setNewTeller({ name: "", username: "", password: "" });
    setSelectedPoint(null);
  };

  const handleEditAccount = (teller) => {
    // Set the current teller to the edit state
    setEditTeller(teller);
    // Fill the form with the existing teller's data
    setNewTeller(teller);
    // Set the selected point for edit
    setSelectedPoint(teller.point);
  };

  return (
    <Box p={4} overflowY="scroll" maxH="80vh">
      <Heading as="h2" size="xl" mb={4}>
        Manage Point Leader Account
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={newTeller.name}
          onChange={handleInputChange}
          placeholder="Enter Teller's Name"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={newTeller.username}
          onChange={handleInputChange}
          placeholder="Enter Username"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={newTeller.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Point Manage</FormLabel>
        <Select
          value={selectedPoint !== null ? selectedPoint.toString() : ""}
          onChange={handleSelectPoint}
        >
          <option value="" disabled>
            Select a point
          </option>
          {transactionPoints.map((point) => (
            <option
              key={`transaction_${point.transactionPointId}`}
              value={point.transactionPointId}
            >
              {point.name}
            </option>
          ))}
          {gatheringPoints.map((point) => (
            <option
              key={`gathering_${point.gatheringPointId}`}
              value={point.gatheringPointId + transactionPoints.length}
            >
              {point.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button colorScheme="teal" onClick={handleGrantAccount}>
        {editTeller ? "Update Account" : "Grant Account"}
      </Button>
      <Box mt={8}>
        <Heading as="h3" size="lg" mb={4}>
          Point Leader Accounts
        </Heading>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Password</Th>
              <Th>Point Manage</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tellers.map((teller) => (
              <Tr key={teller.id}>
                <Td>{teller.id}</Td>
                <Td>{teller.name}</Td>
                <Td>{teller.username}</Td>
                <Td>{teller.password}</Td>
                <Td>{teller.point ? teller.point.name : "-"}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    onClick={() => handleEditAccount(teller)}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default GrantPointLeaderAccount;
