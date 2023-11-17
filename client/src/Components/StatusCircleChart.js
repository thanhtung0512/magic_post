import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Delayed", value: 20, color: "#FF5733" },
  { name: "Delivered", value: 60, color: "#36A2EB" },
  { name: "On time", value: 20, color: "#7FC242" },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const StatusCircleChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={170}
        cy={170} // Adjusted cy value
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="middle" align="right" layout="vertical" /> {/* Adjusted Legend position */}
    </PieChart>
  );
};

export default StatusCircleChart;
