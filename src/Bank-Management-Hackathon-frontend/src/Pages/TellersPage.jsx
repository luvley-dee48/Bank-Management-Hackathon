import React, { useState, useEffect } from "react";
import { 
  Box, Flex, Image, Text, VStack, Stack, Button, Input, 
  Table, Thead, Tbody, Tr, Th, Td, IconButton, Divider,
  Grid, Alert, AlertIcon, AlertDescription, Select, useToast 
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { MdAttachMoney, MdRemoveCircle, MdAccountBalance, MdExpandMore, MdExpandLess } from "react-icons/md";

// Sample data
const tellers = [
  { 
    id: 1, 
    name: "MARCUS", 
    email: "Riojian1@gmail.com", 
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" 
  },
];

const sampleTransactions = [
  { 
    transaction_id: 1, 
    account_type: "Savings", 
    amount: 1000, 
    account_number: "123456789", 
    transaction_date: "2024-11-01", 
    transaction_type: "Deposit",
    status: "completed" 
  },
  { 
    transaction_id: 2, 
    account_type: "Current", 
    amount: 200, 
    account_number: "987654321", 
    transaction_date: "2024-11-02", 
    transaction_type: "Withdraw",
    status: "pending" 
  },
];

const customerDetails = [
  {
    accountNumber: "123456789",
    name: "John Doe",
    contact: "123-456-7890",
    status: "active"
  },
  {
    accountNumber: "987654321",
    name: "Jane Smith",
    contact: "098-765-4321",
    status: "frozen"
  }
];

const identityVerificationData = {
  idNumber: "A12345678",
  signatureUrl: "https://example.com/signature.jpg"
};

const TellersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [filteredTransactions, setFilteredTransactions] = useState(sampleTransactions);
  const [accountNumber, setAccountNumber] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [transactionType, setTransactionType] = useState("all");
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [dailySummary, setDailySummary] = useState({
    completedTransactions: 0,
    pendingApprovals: 0,
    totalAmount: 0,
    alerts: [
      { type: "info", message: "New system update available" },
      { type: "warning", message: "3 transactions pending approval" }
    ]
  });

  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    calculateDailySummary();
  }, [transactions]);

  const calculateDailySummary = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayTransactions = transactions.filter(
      transaction => transaction.transaction_date === today
    );

    setDailySummary(prev => ({
      ...prev,
      completedTransactions: todayTransactions.filter(tx => tx.status === "completed").length,
      pendingApprovals: todayTransactions.filter(tx => tx.status === "pending").length,
      totalAmount: todayTransactions.reduce((sum, tx) => sum + tx.amount, 0),
    }));
  };

  const handleSearch = () => {
    setAccountNumber(searchTerm);
    const filtered = transactions.filter(transaction => 
      transaction.account_number.includes(searchTerm)
    );
    setFilteredTransactions(filtered);
    setSearchExecuted(true);
  };

  const handleFilterChange = (type) => {
    setTransactionType(type);
    const filtered = type === "all" 
      ? transactions 
      : transactions.filter(tx => tx.transaction_type.toLowerCase() === type);
    setFilteredTransactions(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setAccountNumber("");
    setSearchExecuted(false);
    setFilteredTransactions(transactions);
    setTransactionType("all");
  };

  const handleTransactionClick = (transactionType) => {
    toast({
      title: `${transactionType} Transaction`,
      description: `Please confirm identity, enter details, and process the ${transactionType.toLowerCase()}.`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    navigate(`/transaction/${transactionType}`);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleAccountSelect = (accountNumber) => {
    const customer = customerDetails.find((cust) => cust.accountNumber === accountNumber);
    setSelectedAccount(customer);
  };

  const IdentityVerificationSection = () => (
    <Box bg="gray.50" p={4} borderRadius="lg" mt={4}>
      <Text fontSize="xl" fontWeight="bold" mb={2} color="teal.600">
        Identity Verification
      </Text>
      <Divider mb={4} borderColor="teal.300" />
      {selectedAccount ? (
        <>
          <Text><strong>ID Number:</strong> {identityVerificationData.idNumber}</Text>
          <Text><strong>Signature:</strong></Text>
          <Image src={identityVerificationData.signatureUrl} alt="Signature" boxSize="100px" />
        </>
      ) : (
        <Text color="gray.500">Select an account to view identity verification details.</Text>
      )}
    </Box>
  );

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w={{ base: "100%", md: "20%" }}
        p={4}
        bg="teal.500"
        borderRight="1px"
        borderColor="teal.600"
        height="100vh"
        display="flex"
        flexDirection="column"
        position="fixed"
        top={0}
        left={0}
        overflowY="auto"
      >
        <Text fontSize="lg" fontWeight="bold" mb={4} color="white">Tellers</Text>
        {tellers.map(teller => (
          <VStack
            key={teller.id}
            alignItems="center"
            spacing={3}
            p={2}
            borderBottom="1px"
            borderColor="teal.600"
            mb={4}
          >
            <Image
              borderRadius="full"
              boxSize="100px"
              src={teller.imageUrl}
              alt={teller.name}
            />
            <Text fontWeight="bold" color="white">{teller.name}</Text>
            <Text color="gray.200">{teller.email}</Text>
          </VStack>
        ))}
        <Flex justify="center" mt="auto" mb={6}>
          <Button colorScheme="red" onClick={handleLogout}>Log Out</Button>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={4} ml={{ base: 0, md: "20%" }} height="100vh" overflowY="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>ACCOUNTS</Text>

        {/* Daily Summary */}
        <Box mb={8} bg="white" p={6} borderRadius="lg" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" mb={4} color="teal.600">Daily Summary</Text>
          <Divider mb={4} borderColor="teal.300" />
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            <Box p={4} bg="teal.50" borderRadius="md">
              <Text fontWeight="bold">Completed Transactions</Text>
              <Text fontSize="2xl">{dailySummary.completedTransactions}</Text>
            </Box>
            <Box p={4} bg="orange.50" borderRadius="md">
              <Text fontWeight="bold">Pending Approvals</Text>
              <Text fontSize="2xl">{dailySummary.pendingApprovals}</Text>
            </Box>
            <Box p={4} bg="green.50" borderRadius="md">
              <Text fontWeight="bold">Total Amount Processed</Text>
              <Text fontSize="2xl">${dailySummary.totalAmount}</Text>
            </Box>
          </Grid>

          {/* Alerts */}
          {dailySummary.alerts.length > 0 && (
            <Box mt={4}>
              <Text fontWeight="bold" mb={2}>Recent Alerts</Text>
              <VStack align="stretch" spacing={2}>
                {dailySummary.alerts.map((alert, index) => (
                  <Alert key={index} status={alert.type} variant="left-accent">
                    <AlertIcon />
                    <AlertDescription>{alert.message}</AlertDescription>
                  </Alert>
                ))}
              </VStack>
            </Box>
          )}
        </Box>

        {/* Search and Transaction Buttons */}
        <Stack direction="row" spacing={4} mb={4}>
          <Input
            placeholder="Search by account number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch} colorScheme="blue">Search</Button>
          <Button onClick={handleClearSearch} colorScheme="gray">Clear</Button>
        </Stack>

        {/* Transaction Options */}
        <Stack direction="row" spacing={4} mb={6}>
          <Button leftIcon={<MdAttachMoney />} colorScheme="green" onClick={() => handleTransactionClick("Deposit")}>
            Deposit
          </Button>
          <Button leftIcon={<MdRemoveCircle />} colorScheme="red" onClick={() => handleTransactionClick("Withdraw")}>
            Withdraw
          </Button>
          <Button leftIcon={<MdAccountBalance />} colorScheme="blue" onClick={() => handleTransactionClick("Loan")}>
            Loan
          </Button>
        </Stack>

        {/* Transaction Table */}
        <Select onChange={(e) => handleFilterChange(e.target.value)} value={transactionType} mb={4}>
          <option value="all">All Transactions</option>
          <option value="deposit">Deposits</option>
          <option value="withdraw">Withdrawals</option>
          <option value="loan">Loans</option>
        </Select>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Transaction ID</Th>
              <Th>Account Type</Th>
              <Th>Amount</Th>
              <Th>Account Number</Th>
              <Th>Transaction Date</Th>
              <Th>Transaction Type</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTransactions.map((transaction) => (
              <Tr key={transaction.transaction_id}>
                <Td>{transaction.transaction_id}</Td>
                <Td>{transaction.account_type}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.account_number}</Td>
                <Td>{transaction.transaction_date}</Td>
                <Td>{transaction.transaction_type}</Td>
                <Td>{transaction.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        
        {/* Customer Profile and Identity Verification */}
        <Box mb={8} bg="white" p={6} borderRadius="lg" boxShadow="md" mt={4}>
          <Text fontSize="xl" fontWeight="bold" mb={4} color="teal.600">Customer Information</Text>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Account Number</Th>
                <Th>Name</Th>
                <Th>Contact</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {customerDetails.map((customer) => (
                <Tr 
                  key={customer.accountNumber} 
                  onClick={() => handleAccountSelect(customer.accountNumber)}
                  _hover={{ bg: "gray.100", cursor: "pointer" }}
                >
                  <Td>{customer.accountNumber}</Td>
                  <Td>{customer.name}</Td>
                  <Td>{customer.contact}</Td>
                  <Td>{customer.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <IdentityVerificationSection />
      </Box>
    </Flex>
  );
};

export default TellersPage;
