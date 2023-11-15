// ContentPage.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';

const ContentPage = ({ title }) => {
  const generateChartData = () => {
    // Generate sample data for the bar chart
    const data = {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [
        {
          label: 'Data Set 1',
          backgroundColor: '#3182CE',
          borderColor: '#3182CE',
          borderWidth: 1,
          hoverBackgroundColor: '#2C5282',
          hoverBorderColor: '#2C5282',
          data: [12, 19, 3, 5, 2],
        },
      ],
    };
    return data;
  };
  const renderContent = () => {
    switch (title) {
      case 'dashboard':
        return <Text>Dashboard Content Goes Here</Text>;
      case 'manage-points':
        return <Text>Manage Points Content Goes Here</Text>;
      case 'manage-account-managers':
        return <Text>Manage Account Managers Content Goes Here</Text>;
      case 'view-statistics':
        return (
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              {title} 
            </Text>
            <Text>abccc</Text>
            {/* <Bar data={generateChartData()} /> */}
            
          </Box>
        );
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
