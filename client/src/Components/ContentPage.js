// ContentPage.js
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import Chart from "./SimpleChart";
import ComplexChart from "./ComplexChart";
import BeautifulChart from "./BeautifulChart";
import CompanyLeaderDashboard from "./CompanyLeaderDashboard";
import CompanyLeaderManagePoints from "./CompanyLeaderManagePoints";
import ManagePointsPage from "./ManagePointsPage";
const ContentPage = ({ title }) => {
  console.log("title", title);
  const generateChartData = () => {
    // Generate sample data for the bar chart
    const data = {
      labels: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
      datasets: [
        {
          label: "Data Set 1",
          backgroundColor: "#3182CE",
          borderColor: "#3182CE",
          borderWidth: 1,
          hoverBackgroundColor: "#2C5282",
          hoverBorderColor: "#2C5282",
          data: [12, 19, 3, 5, 2],
        },
      ],
    };
    return data;
  };

  const deliveryOrderData = [
    { month: "Jan", count: 10 },
    { month: "Feb", count: 15 },
    { month: "Mar", count: 8 },
    // ... more data
  ];

  const deliveryOrderDataWithPendingCancelled = [
    { month: "Jan", completed: 10, pending: 5, cancelled: 2 },
    { month: "Feb", completed: 15, pending: 3, cancelled: 1 },
    { month: "Mar", completed: 8, pending: 2, cancelled: 0 },
    { month: "Apr", completed: 22, pending: 1, cancelled: 0 },
    { month: "May", completed: 30, pending: 19, cancelled: 7 },
    { month: "Jun", completed: 27, pending: 5, cancelled: 12 },
    // ... more data
  ];

  const customColors = ["#3182CE", "#E53E3E", "#48BB78"];
  const renderContent = () => {
    switch (title) {
      case "/dashboard":
        return <CompanyLeaderDashboard/> ;
      case "/manage-points":
        return <ManagePointsPage/>;
      case "/manage-account-managers":
        return <></> ;
      case "/view-statistics":
        return (
          <Box>
            <Text>Chart</Text>

            <ComplexChart data={deliveryOrderDataWithPendingCancelled} />
            <BeautifulChart
              data={deliveryOrderDataWithPendingCancelled}
              colors={customColors}
            />
          </Box>
        );
      // Add more cases as needed
      default:
        return <Text>MagicPost</Text>;
    }
  };

  return (
    <Box flex="1" p={4} ml="270px" borderLeft="1px solid #E2E8F0">
      {" "}
      {/* Adjust margin-left for the sidebar width */}
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      {renderContent()}
    </Box>
  );
};

export default ContentPage;
