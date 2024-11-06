import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  GridItem,
  Input,
  Button,
  Alert,
  AlertIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import CustomerSidebar from "../Components/CustomerSidebar";

function CustomerAccountDashboard() {
  const [accountNumber, setAccountNumber] = useState("");
  const [error, setError] = useState(null);

  // Sample data for account balances, recent transactions, and account statements
  const accountData = {
    balance: 5000,
    linkedAccounts: [
      { type: "Checking", balance: 3000 },
      { type: "Savings", balance: 5000 },
      { type: "Loan", balance: -2000 },
    ],
  };

  const recentTransactions = [
    { date: "2024-11-01", description: "Deposit", amount: 1000, type: "deposit" },
    { date: "2024-10-30", description: "Withdrawal", amount: 500, type: "withdrawal" },
    { date: "2024-10-29", description: "Transfer to Savings", amount: 2000, type: "transfer" },
  ];

  const accountSummary = [
    { type: "Savings Account", interestRate: "3.5%" },
    { type: "Checking Account", interestRate: "0.5%" },
    { type: "Loan Account", interestRate: "8%" },
  ];

  const accountStatements = [
    { date: "2024-10-15", description: "Monthly Fee", amount: -300 },
    { date: "2024-10-01", description: "Salary Deposit", amount: 5000 },
    // Add more statements as needed
  ];

  const handleFetchDetails = () => {
    setError(null);
    if (accountNumber.trim() === "") {
      setError("Please enter a valid account number.");
    }
  };

  return (
    <Flex height="100vh" overflow="hidden">
      <CustomerSidebar />
      <Box flex="1" padding="50px" bg="#F0F4F8" borderRadius="10px" fontFamily="Arial, sans-serif">
        <Text fontSize="3xl" fontWeight="bold" marginBottom="10px">My Account</Text>
        <Text fontSize="lg" marginBottom="60px" color="gray.600">
          Access & manage your account and transactions efficiently
        </Text>

        <Box marginBottom="40px">
          <Input
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            size="lg"
            marginBottom="10px"
          />
          <Button onClick={handleFetchDetails} colorScheme="teal" size="lg">
            View Account Details
          </Button>
        </Box>

        {error && (
          <Alert status="error" marginBottom="40px">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {/* Account Balance Section */}
        {accountData && (
          <Box marginBottom="60px">
            <Text fontSize="xl" fontWeight="bold" marginBottom="15px">Account Balances</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="30px">
              {accountData.linkedAccounts.map((account, index) => (
                <GridItem key={index}>
                  <Box
                    bg="#DAEEEB"
                    padding="30px"
                    borderRadius="15px"
                    boxShadow="lg"
                  >
                    <Text fontSize="lg" fontWeight="bold" marginBottom="15px">
                      {account.type}
                    </Text>
                    <Text fontSize="3xl" fontWeight="bold">
                      Ksh {account.balance}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
        )}

        {/* Recent Transactions Section */}
        {recentTransactions.length > 0 && (
          <Box marginBottom="60px">
            <Text fontSize="xl" fontWeight="bold" marginBottom="15px">Recent Transactions</Text>
            <Table variant="simple" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Type</Th>
                </Tr>
              </Thead>
              <Tbody>
                {recentTransactions.map((transaction, index) => (
                  <Tr key={index}>
                    <Td>{transaction.date}</Td>
                    <Td>{transaction.description}</Td>
                    <Td isNumeric color={transaction.type === "withdrawal" ? "red.500" : "green.500"}>
                      Ksh {transaction.amount}
                    </Td>
                    <Td>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}

        {/* Account Summary Section */}
        {accountSummary.length > 0 && (
          <Box marginBottom="60px">
            <Text fontSize="xl" fontWeight="bold" marginBottom="15px">Account Summary</Text>
            <VStack spacing="15px" align="start">
              {accountSummary.map((account, index) => (
                <HStack key={index} justify="space-between" width="100%">
                  <Text fontWeight="bold">{account.type}</Text>
                  <Text>{account.interestRate}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        )}

        {/* Account Statements Section */}
        {accountStatements.length > 0 && (
          <Box marginBottom="60px">
            <Text fontSize="xl" fontWeight="bold" marginBottom="15px">Account Statements</Text>
            <Table variant="simple" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accountStatements.map((statement, index) => (
                  <Tr key={index}>
                    <Td>{statement.date}</Td>
                    <Td>{statement.description}</Td>
                    <Td isNumeric color={statement.amount < 0 ? "red.500" : "green.500"}>
                      Ksh {statement.amount}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default CustomerAccountDashboard;
