// App.js
import React from "react";
import MainLayout from "./Screens/MainLayout";
import HeaderBar from "./Components/HeaderBar";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <MainLayout/>
      {/* Your other components */}
    </ChakraProvider>
  );
}

export default App;
