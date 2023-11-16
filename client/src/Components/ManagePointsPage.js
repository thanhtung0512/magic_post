import React from "react";
import { Box, Heading, Button, List, ListItem, Text } from "@chakra-ui/react";

const ManagePointsPage = () => {
  const transactionPlaces = [
    { id: 1, name: "Transaction Point 1" },
    { id: 2, name: "Transaction Point 2" },
    { id: 3, name: "Transaction Point 3" },
  ];

  const gatheringPlaces = [
    { id: 1, name: "Gathering Point 1" },
    { id: 2, name: "Gathering Point 2" },
    { id: 3, name: "Gathering Point 3" },
  ];

  const handleManageTransactionPlaces = () => {
    // Logic for managing transaction places
    console.log("Managing transaction places");
  };

  const handleManageGatheringPlaces = () => {
    // Logic for managing gathering places
    console.log("Managing gathering places");
  };

  return (
    <Box>
      <Heading size="lg" mb={4}>
        Manage Points
      </Heading>
      <Button onClick={handleManageTransactionPlaces} colorScheme="blue" mr={4}>
        Manage Transaction Places
      </Button>
      <Button onClick={handleManageGatheringPlaces} colorScheme="green">
        Manage Gathering Places
      </Button>

      <Box>
        <Heading size="md" mt={6} mb={2}>
          Transaction Places
        </Heading>
        <List spacing={2}>
          {transactionPlaces.map((place) => (
            <ListItem key={place.id}>
              <Text>{place.name}</Text>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={6}>
        <Heading size="md" mb={2}>
          Gathering Places
        </Heading>
        <List spacing={2}>
          {gatheringPlaces.map((place) => (
            <ListItem key={place.id}>
              <Text>{place.name}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ManagePointsPage;
