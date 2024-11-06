import React from "react";
import { Box, Flex, Image, Text, VStack, Stack, Button, Input, Select, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

const tellers = [
  { id: 1, name: "Katana", email: "Riojian1@gmail.com", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" },
];

const TransactionForm = () => {
  return (
    <Box w="full" maxW="800px" bg="white" p={8} boxShadow="md" borderRadius="lg">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Please Enter Payment Details</Text>

      <Stack spacing={4}>
        <FormControl id="transactionType">
          <FormLabel>Transaction Type</FormLabel>
          <Select placeholder="Select Transaction Type">
            <option>Deposit</option>
            <option>Withdraw</option>
            <option>Loan</option>
          </Select>
        </FormControl>

        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" />
        </FormControl>

        <FormControl id="accountNo">
          <FormLabel>Account Number</FormLabel>
          <Input type="text" placeholder="Enter Account Number" />
        </FormControl>

        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input type="number" placeholder="Enter Amount" />
        </FormControl>

        <FormControl id="accountType">
          <FormLabel>Account Type</FormLabel>
          <Select placeholder="Select Account Type">
            <option>Saving</option>
            <option>Current</option>
            <option>Fixed Deposit</option>
          </Select>
        </FormControl>

        <Button colorScheme="teal" size="lg" mt={4}>Submit</Button>
      </Stack>
    </Box>
  );
};

const TellerSidebar = () => {
  return (
    <Box w="20%" p={4} bg="teal.500" height="100vh" borderRight="1px" borderColor="teal.600" display="flex" flexDirection="column">
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4} color="white"> </Text>
        {tellers.map(teller => (
          <VStack key={teller.id} alignItems="center" spacing={3} p={2} borderBottom="1px" borderColor="teal.600" mb={4} _last={{ mb: 0 }}>
            <Image borderRadius="full" boxSize="100px" src={teller.imageUrl} alt={teller.name} />
            <Text fontWeight="bold" color="white">{teller.name}</Text>
            <Text color="gray.200">{teller.email}</Text>
            <Text color="teal.200" fontWeight="medium" border="1px" borderColor="teal.200" borderRadius="md" px={2} py={1} textAlign="center">
              Teller No. {teller.id}
            </Text>
          </VStack>
        ))}
      </Box>

      <Flex justify="center" mt="auto" mb={6}>
        <Button colorScheme="red">Log Out</Button>
      </Flex>
    </Box>
  );
};

const TransactionPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/tellers"); 
  };

  return (
    <Flex height="100vh">
      <TellerSidebar />
      <Flex flex="1" p={6} bg="gray.50" alignItems="center" justifyContent="center" position="relative">
        <IconButton
          aria-label="Close"
          icon={<MdClose />}
          position="absolute"
          top={4}
          right={4}
          onClick={handleClose}
          size="lg"
          colorScheme="teal"
        />
        <TransactionForm />
      </Flex>
    </Flex>
  );
};

export default TransactionPage;