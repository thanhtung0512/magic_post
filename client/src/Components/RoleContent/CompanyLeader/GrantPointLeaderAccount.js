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
  Select,
} from "@chakra-ui/react";

const GrantPointLeaderAccount = () => {
  const [newPointLeader, setNewPointLeader] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "", // New field added
    point: null, // New field added
  });
  const [editPointLeader, setEditPointLeader] = useState(null);
  const [pointLeaders, setPointLeaders] = useState([]);
  const [transactionPoints, setTransactionPoints] = useState([]);
  const [gatheringPoints, setGatheringPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/point-leaders")
      .then((response) => response.json())
      .then((data) => {
        // Extract transaction and gathering points separately
        const transactionPoints = data
          .filter((pointLeader) => pointLeader.transactionPoint)
          .map((pointLeader) => pointLeader.transactionPoint);

        const gatheringPoints = data
          .filter((pointLeader) => pointLeader.gatheringPoint)
          .map((pointLeader) => pointLeader.gatheringPoint);

        // Set the state
        setPointLeaders(data);
        // setTransactionPoints(transactionPoints);
        // setGatheringPoints(gatheringPoints);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
    setNewPointLeader((prevPointLeader) => ({
      ...prevPointLeader,
      [name]: value,
    }));
  };

  const handleSelectPoint = (e) => {
    const selectedValue = e.target.value;
    setSelectedPoint(selectedValue !== "" ? parseInt(selectedValue) : null);
  };

  const handleGrantAccount = () => {
    // Add validation logic here
    if (
      !newPointLeader.name ||
      !newPointLeader.username ||
      !newPointLeader.email ||
      !newPointLeader.password ||
      !newPointLeader.phoneNumber || // Validate phone number
      !selectedPoint
    ) {
      // Handle validation error, maybe show an alert or toast message
      return;
    }

    // Add logic to send the new pointLeader data to the server or update state as needed
    // For now, let's just add it to the local state
    if (editPointLeader) {
      console.log("Selected point :", selectedPoint);
      // If editing an existing pointLeader, update the existing entry
      setPointLeaders((prevPointLeaders) =>
        prevPointLeaders.map((pointLeader) =>
          pointLeader.id === editPointLeader.id
            ? {
                ...newPointLeader,
                id: pointLeader.id,
                point: selectedPoint,
              }
            : pointLeader
        )
      );

      setEditPointLeader(null);
    } else {
      // If adding a new pointLeader, add it to the local state
      setPointLeaders((prevPointLeaders) => [
        ...prevPointLeaders,
        {
          ...newPointLeader,
          id: prevPointLeaders.length + 1,
          point: selectedPoint,
        },
      ]);
    }

    // Reset the form
    setNewPointLeader({
      name: "",
      username: "",
      password: "",
      phoneNumber: "",
      email: "",
    });
    setSelectedPoint(null);
  
  };

  const handleEditAccount = (pointLeader) => {
    // Set the current pointLeader to the edit state
    setEditPointLeader(pointLeader);
    // Fill the form with the existing pointLeader's data
    setNewPointLeader({
      name: pointLeader.name,
      username: pointLeader.user.username,
      password: pointLeader.user.password,
      phoneNumber: pointLeader.phoneNumber,
      email: pointLeader.user.email,
    });
    // Set the selected point for edit
    setSelectedPoint(
      pointLeader.transactionPoint
        ? pointLeader.transactionPoint.transactionPointId
        : pointLeader.gatheringPoint.gatheringPointId + transactionPoints.length
    );
    console.log("selectedPoint:", selectedPoint);
  };

  return (
    <Box p={4} overflowY="scroll" maxH="80vh">
      <Heading as="h2" size="xl" mb={4}>
        Manage Point Leader Account: {selectedPoint}
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={newPointLeader.name}
          onChange={handleInputChange}
          placeholder="Enter Point Leader's Name"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={newPointLeader.username}
          onChange={handleInputChange}
          placeholder="Enter Username"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={newPointLeader.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={newPointLeader.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          name="phoneNumber"
          value={newPointLeader.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter Phone Number"
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
        {editPointLeader ? "Update Account" : "Grant Account"}
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
              <Th>Phone Number</Th>
              <Th>Point</Th>
              <Th>Email</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pointLeaders.map((pointLeader) => (
              <Tr key={pointLeader.pointLeaderId}>
                <Td>{pointLeader.pointLeaderId}</Td>
                <Td>{pointLeader.name}</Td>
                <Td>{pointLeader.user ? pointLeader.user.username : ""}</Td>
                <Td>{pointLeader.user ? pointLeader.user.password : ""}</Td>
                <Td>{pointLeader.phoneNumber}</Td>
                <Td>
                  {pointLeader.transactionPoint
                    ? pointLeader.transactionPoint.name
                    : pointLeader.gatheringPoint
                    ? pointLeader.gatheringPoint.name
                    : ""}
                </Td>
                <Td>{pointLeader.user ? pointLeader.user.email : ""}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    onClick={() => handleEditAccount(pointLeader)}
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
