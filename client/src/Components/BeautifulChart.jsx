import React from "react";
import { Box, Text } from "@chakra-ui/react";
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

const BeautifulChart = ({ data, colors }) => {
  const getDataKeys = () => {
    if (data.length > 0) {
      return Object.keys(data[0]).filter((key) => key !== "month");
    }
    return [];
  };

  const renderBars = () => {
    const dataKeys = getDataKeys();

    return dataKeys.map((key, index) => (
      <Bar
        key={index}
        dataKey={key}
        fill={colors[index % colors.length]}
        stackId="stack"
      />
    ));
  };

  return (
    <Box borderRadius="md" boxShadow="md" p={4}>
      <Text fontSize="xl" mb={4}>
        Delivery Orders Statistics
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} stackOffset="sign">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {renderBars()}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BeautifulChart;
