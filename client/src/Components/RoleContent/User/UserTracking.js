import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Fade,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';

// Mock data
const deliveryOrders = [
  {
    orderId: 1,
    senderTransactionPoint: 'City A',
    recipientTransactionPoint: 'City B',
    status: 'In Transit',
  },
  {
    orderId: 2,
    senderTransactionPoint: 'City X',
    recipientTransactionPoint: 'City Y',
    status: 'Delivered',
  },
  // Add more mock data as needed
];

const UserTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [error, setError] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = () => {
    // Simulate searching for the order in the mock data
    const foundOrder = deliveryOrders.find((order) => order.orderId.toString() === orderId);

    if (foundOrder) {
      setOrderStatus(foundOrder);
      setError('');
      onOpen();
    } else {
      setOrderStatus(null);
      setError('Cannot find your package, please re-check the entered package ID');
    }
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Track Your Package
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Enter Order ID</FormLabel>
        <Input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order ID"
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleSearch}>
        Track Package
      </Button>

      {error && <Text color="red">{error}</Text>}

      {orderStatus && (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Your Package Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {orderStatus && (
                <Fade in>
                  <Box>
                    <Text as="h3" mb={2}>
                      Status:
                    </Text>
                    <Text color={orderStatus.status === 'In Transit' ? 'orange' : 'green'}>
                      {orderStatus.status}
                    </Text>

                    <Heading as="h3" size="md" mt={4} mb={2}>
                      Detailed Information
                    </Heading>

                    <Table variant="simple">
                      <Tbody>
                        <Tr>
                          <Td>Order ID</Td>
                          <Td>{orderStatus.orderId}</Td>
                        </Tr>
                        <Tr>
                          <Td>Sender Transaction Point</Td>
                          <Td>{orderStatus.senderTransactionPoint}</Td>
                        </Tr>
                        <Tr>
                          <Td>Recipient Transaction Point</Td>
                          <Td>{orderStatus.recipientTransactionPoint}</Td>
                        </Tr>
                        {/* Add more fields as needed */}
                      </Tbody>
                    </Table>
                  </Box>
                </Fade>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default UserTracking;
