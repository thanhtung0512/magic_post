import React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import CombinedHeaderAndSidebar from "./Components/CombinedHeaderAndSidebar";
const theme = extendTheme({
  colors: {
    brand: {
      500: '#3182CE', // Blue color
    },
  },
});

const App = () => {
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout clicked');
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {/* ... Your other components ... */}
      <CombinedHeaderAndSidebar/>
      {/* ... Rest of your application ... */}
    </ChakraProvider>
  );
};
export default App;
