import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComplexChart = ({ data }) => {
  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Pending/ Complete over times{" "}
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="completed"
            stroke="#3182CE"
            name="Completed"
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="#E53E3E"
            name="Pending"
          />
          <Line
            type="monotone"
            dataKey="cancelled"
            stroke="green"
            name="Cancelled"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ComplexChart;
