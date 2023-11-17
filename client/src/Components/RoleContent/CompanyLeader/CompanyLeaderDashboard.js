import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import MapWithMarkers from "../../MapWithMarkers";

const CompanyLeaderDashboard = () => {
  // Mock data
  const systemSummary = {
    totalTransactionPoints: 25,
    totalGatheringPoints: 15,
    activeUsers: 500,
  };

  const nationwideStatistics = {
    totalGoodsSent: 1000,
    totalGoodsReceived: 800,
    // Add more statistics as needed
  };

  const performanceMetrics = {
    averageDeliveryTime: "2 days",
    successfulDeliveryPercentage: "92%",
    // Add more performance metrics as needed
  };

  const transactionPoints = [
    { location: "City A", performanceMetric: 90 },
    { location: "City B", performanceMetric: 85 },
    // Add more transaction points as needed
  ];

  const gatheringPoints = [
    { location: "City X", performanceMetric: 95 },
    { location: "City Y", performanceMetric: 80 },
    // Add more gathering points as needed
  ];

  const recentReports = [
    { title: "Goods Handling Report", date: "2023-11-15" },
    { title: "Successful Transfers Report", date: "2023-11-14" },
    // Add more recent reports as needed
  ];

  const notifications = [
    "System maintenance scheduled for tomorrow",
    "New feature rollout coming next week",
    // Add more notifications as needed
  ];

  const renderTransactionPointsTable = () => (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Location</Th>
          <Th>Performance Metric</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactionPoints.map((point, index) => (
          <Tr key={index}>
            <Td>{point.location}</Td>
            <Td>{point.performanceMetric}%</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const renderGatheringPointsTable = () => (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Location</Th>
          <Th>Performance Metric</Th>
        </Tr>
      </Thead>
      <Tbody>
        {gatheringPoints.map((point, index) => (
          <Tr key={index}>
            <Td>{point.location}</Td>
            <Td>{point.performanceMetric}%</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const renderRecentReports = () => (
    <Box>
      {recentReports.map((report, index) => (
        <Text key={index}>
          {report.title} - {report.date}
        </Text>
      ))}
    </Box>
  );

  const renderChart = () => {
    const data = [
      { location: "City A", performanceMetric: 90 },
      { location: "City B", performanceMetric: 85 },
      { location: "City X", performanceMetric: 95 },
      { location: "City Y", performanceMetric: 80 },
    ];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="location" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="performanceMetric" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const fontSize = useBreakpointValue({ base: "md", md: "xl" });
  return (
    <Box overflowY="scroll" maxH="80vh" p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Company Leader Dashboard
      </Heading>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          System Summary
        </Heading>
        <Text>
          Total Transaction Points: {systemSummary.totalTransactionPoints}
        </Text>
        <Text>
          Total Gathering Points: {systemSummary.totalGatheringPoints}
        </Text>
        <Text>Active Users: {systemSummary.activeUsers}</Text>
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Nationwide Statistics
        </Heading>
        <Text>Total Goods Sent: {nationwideStatistics.totalGoodsSent}</Text>
        <Text>
          Total Goods Received: {nationwideStatistics.totalGoodsReceived}
        </Text>
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Performance Metrics
        </Heading>
        <Text>
          Average Delivery Time: {performanceMetrics.averageDeliveryTime}
        </Text>
        <Text>
          Successful Delivery Percentage:{" "}
          {performanceMetrics.successfulDeliveryPercentage}
        </Text>
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Transaction Points Overview
        </Heading>
        {renderTransactionPointsTable()}
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Gathering Points Overview
        </Heading>
        {renderGatheringPointsTable()}
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Recent Reports
        </Heading>
        {renderRecentReports()}
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Notifications
        </Heading>
        {notifications.map((notification, index) => (
          <Text key={index}>{notification}</Text>
        ))}
      </Box>

      <Box mb={6} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h3" size="lg" mb={2}>
          Performance Chart
        </Heading>
        {renderChart()}
      </Box>
    </Box>
  );
};

export default CompanyLeaderDashboard;
