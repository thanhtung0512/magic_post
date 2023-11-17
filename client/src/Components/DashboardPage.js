import React from "react";
import {
  Box,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StatusCircleChart from "./StatusCircleChart";
import TransactionPlaceTable from './TransactionPlaceTable'
const mockMonthlyOrdersData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 150 },
  { month: "Mar", orders: 80 },
  { month: "Apr", orders: 200 },
  { month: "May", orders: 180 },
  { month: "Jun", orders: 250 },
  { month: "Jul", orders: 300 },
  { month: "Aug", orders: 280 },
  { month: "Sep", orders: 220 },
  { month: "Oct", orders: 190 },
  { month: "Nov", orders: 210 },
  { month: "Dec", orders: 180 },
];

const generateRandomPercentageChange = () => {
  const randomValue = (Math.random() - 0.5) * 10; // Generate a random value between -5 and 5
  return randomValue;
};

const DashboardPage = () => {
  return (
    <Box overflowY="scroll" maxH="80vh" p={4}>
      <Flex justify="space-between" mb={9}>
        {[1, 2, 3, 4].map((index) => (
          <Stat
            key={index}
            p={4}
            mr={2}
            borderRadius="lg"
            borderWidth="2px"
            boxShadow="xl"
            bg="white"
            width="50%"
          >
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>$4,233</StatNumber>
            <StatHelpText>
              <StatArrow
                type={
                  generateRandomPercentageChange() > 0.0
                    ? "increase"
                    : "decrease"
                }
              />
              {`${generateRandomPercentageChange().toFixed(2)}%`}
            </StatHelpText>
          </Stat>
        ))}
      </Flex>

      <Heading as="h2" size="lg" mb={4} color="black">
        Monthly Orders
      </Heading>

      <Flex justify="space-between" mb={9}>
        <ResponsiveContainer
          width="70%"
          height={350}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderWidth: "2px",
            borderColor: "#E2E8F0",
            borderStyle: "solid",
            borderRadius: "8px",
            marginRight: "0px",
            // Optional: Add border radius for rounded corners
          }}
        >
          <BarChart data={mockMonthlyOrdersData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer
          width="30%"
          height={350}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderWidth: "2px",
            borderColor: "#E2E8F0",
            borderStyle: "solid",
            borderRadius: "8px",
            marginRight: "0px",
            // Optional: Add border radius for rounded corners
          }}
        >
          <StatusCircleChart />
        </ResponsiveContainer>
      </Flex>

      <TransactionPlaceTable/>
      {/* Add components for Card 6 (Circle Chart) and Card 7 (Table) */}
    </Box>
  );
};

export default DashboardPage;
