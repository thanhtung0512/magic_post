import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Delivery Orders Statistics
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
