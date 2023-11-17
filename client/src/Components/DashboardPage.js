import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
  Text,
} from '@chakra-ui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const mockMonthlyOrdersData = [
  { month: 'Jan', orders: 120 },
  { month: 'Feb', orders: 150 },
  { month: 'Mar', orders: 80 },
  { month: 'Apr', orders: 200 },
  { month: 'May', orders: 180 },
  { month: 'Jun', orders: 250 },
  { month: 'Jul', orders: 300 },
  { month: 'Aug', orders: 280 },
  { month: 'Sep', orders: 220 },
  { month: 'Oct', orders: 190 },
  { month: 'Nov', orders: 210 },
  { month: 'Dec', orders: 180 },
];

const generateRandomPercentageChange = () => {
  const randomValue = Math.random() * 10;
  return randomValue >= 5 ? `+${randomValue.toFixed(2)}%` : `-${randomValue.toFixed(2)}%`;
};

const DashboardPage = () => {
  return (
    <Box p={8}>
      <Grid templateColumns="repeat(4, 4fr)" gap={6} mb={8}>
        {/* Card 1 */}
        <GridItem rowSpan={1} colSpan={1}>
          <Stat>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>$4,233</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {generateRandomPercentageChange()}
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <Stat>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>$4,233</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {generateRandomPercentageChange()}
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem rowSpan={1} colSpan={3}>
          <Stat>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>$4,233</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {generateRandomPercentageChange()}
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem rowSpan={2} colSpan={3}>
          <Stat>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>$4,233</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {generateRandomPercentageChange()}
            </StatHelpText>
          </Stat>
        </GridItem>

        {/* Card 2 */}
        {/* Add similar GridItems for other cards */}

        {/* Statistic Chart (Card 5) */}
        <GridItem colSpan={4}>
          <Heading as="h2" size="lg" mb={4}>
            Monthly Orders
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockMonthlyOrdersData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </GridItem>
      </Grid>

      {/* Add components for Card 6 (Circle Chart) and Card 7 (Table) */}
    </Box>
  );
};

export default DashboardPage;
