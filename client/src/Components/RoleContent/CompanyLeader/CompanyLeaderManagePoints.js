import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const CompanyLeaderManagePoints = () => {
  // Mock data
  const transactionPoints = [
    { location: "City A", points: 100 },
    { location: "City B", points: 85 },
    { location: "City C", points: 70 },
    // Add more transaction points as needed
  ];

  const gatheringPoints = [
    { location: "City X", points: 120 },
    { location: "City Y", points: 90 },
    { location: "City Z", points: 75 },
    // Add more gathering points as needed
  ];

  const handleAddTransactionPoints = (index) => {
    // Logic to add transaction points for a specific location
    // Placeholder logic
    const updatedTransactionPoints = [...transactionPoints];
    updatedTransactionPoints[index].points += 10;
    // Update the state or make an API call to update the points

    console.log(
      `Added transaction points for ${updatedTransactionPoints[index].location}`
    );
  };

  const handleSubtractTransactionPoints = (index) => {
    // Logic to subtract transaction points for a specific location
    // Placeholder logic
    const updatedTransactionPoints = [...transactionPoints];
    updatedTransactionPoints[index].points -= 10;
    // Update the state or make an API call to update the points

    console.log(
      `Subtracted transaction points for ${updatedTransactionPoints[index].location}`
    );
  };

  const handleAddGatheringPoints = (index) => {
    // Logic to add gathering points for a specific location
    // Placeholder logic
    const updatedGatheringPoints = [...gatheringPoints];
    updatedGatheringPoints[index].points += 10;
    // Update the state or make an API call to update the points

    console.log(
      `Added gathering points for ${updatedGatheringPoints[index].location}`
    );
  };

  const handleSubtractGatheringPoints = (index) => {
    // Logic to subtract gathering points for a specific location
    // Placeholder logic
    const updatedGatheringPoints = [...gatheringPoints];
    updatedGatheringPoints[index].points -= 10;
    // Update the state or make an API call to update the points

    console.log(
      `Subtracted gathering points for ${updatedGatheringPoints[index].location}`
    );
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Manage Points
      </Heading>

      <Box mb={6}>
        <Heading as="h3" size="lg" mb={2}>
          Transaction Points
        </Heading>
        {transactionPoints.map((point, index) => (
          <Flex
            key={index}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Text>{point.location}</Text>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="Add Transaction Points"
                icon={<AddIcon />}
                onClick={() => handleAddTransactionPoints(index)}
              />
              <IconButton
                aria-label="Subtract Transaction Points"
                icon={<MinusIcon />}
                onClick={() => handleSubtractTransactionPoints(index)}
              />
            </Stack>
            <Text>{point.points} Points</Text>
          </Flex>
        ))}
      </Box>

      <Box mb={6}>
        <Heading as="h3" size="lg" mb={2}>
          Gathering Points
        </Heading>
        {gatheringPoints.map((point, index) => (
          <Flex
            key={index}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Text>{point.location}</Text>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="Add Gathering Points"
                icon={<AddIcon />}
                onClick={() => handleAddGatheringPoints(index)}
              />
              <IconButton
                aria-label="Subtract Gathering Points"
                icon={<MinusIcon />}
                onClick={() => handleSubtractGatheringPoints(index)}
              />
            </Stack>
            <Text>{point.points} Points</Text>
          </Flex>
        ))}
      </Box>

      <Button colorScheme="blue">Submit</Button>
    </Box>
  );
};

export default CompanyLeaderManagePoints;
