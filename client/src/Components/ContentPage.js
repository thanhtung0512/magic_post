// ContentPage.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ContentPage = ({ title }) => {
  const renderContent = () => {
    switch (title) {
      case 'dashboard':
        return <Text>Dashboard Content Goes Here</Text>;
      case 'manage-points':
        return <Text>Manage Points Content Goes Here</Text>;
      case 'manage-account-managers':
        return <Text>Manage Account Managers Content Goes Here</Text>;
      case 'view-statistics':
        return <Text>View Statistics Content Goes Here</Text>;
      // Add more cases as needed
      default:
        return <Text>Select a navigation item to view content.</Text>;
    }
  };

  return (
    <Box flex="1" p={4} ml="270px" borderLeft="1px solid #E2E8F0"> {/* Adjust margin-left for the sidebar width */}
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      {renderContent()}
    </Box>
  );
};

export default ContentPage;
