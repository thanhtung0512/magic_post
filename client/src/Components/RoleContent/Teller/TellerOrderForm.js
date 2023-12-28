import { Box, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const TellerOrderForm = () => {
  return (
    <Box  p={4} rounded="md">
      <FormControl>
        <FormLabel fontWeight="bold">Sender</FormLabel>
        <Input placeholder="Sender Name" mb={2} />
        <Input placeholder="Sender Address" mb={2} />
        <Input placeholder="Sender Phone Number" mb={2} />
        <Input placeholder="Sender Postal Code" mb={4} />
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Recipient</FormLabel>
        <Input placeholder="Recipient Name" mb={2} />
        <Input placeholder="Recipient Address" mb={2} />
        <Input placeholder="Recipient Phone Number" mb={2} />
        <Input placeholder="Recipient Postal Code" mb={4} />
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Order Type</FormLabel>
        <Select placeholder="Select an Order Type" mb={4}>
          <option value="document">Document</option>
          <option value="goods">Goods</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Fare</FormLabel>
        <Input placeholder="Main Fare" mb={2} />
        <Input placeholder="Extra Fare" mb={2} />
        <Input placeholder="Sum Fare" mb={4} />
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Weight (kg)</FormLabel>
        <Input placeholder="Net Weight" mb={2} />
        <Input placeholder="Conversion Weight" mb={4} />
      </FormControl>
    </Box>
  );
};

export default TellerOrderForm;