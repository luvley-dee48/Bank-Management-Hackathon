import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Select,
  useDisclosure,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomerSidebar from "../Components/CustomerSidebar";

function CustomerTransactionDashboard() {
  const [accountNumber, setAccountNumber] = useState("12345678"); // Example account number
  const [transactions, setTransactions] = useState([
    { transaction_date: '2024-11-01', transaction_type: 'deposit', amount: 2000, account_number: '12345678' },
    { transaction_date: '2024-11-02', transaction_type: 'withdrawal', amount: 500, account_number: '12345678' },
    { transaction_date: '2024-11-03', transaction_type: 'transfer', amount: 1000, account_number: '12345678' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 14;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Transfer settings
  const transferLimits = { internal: 5000, external: 2000 };
  const transferFees = { internal: 0, external: 50 };

  // Funds Transfer Modal State
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [transferType, setTransferType] = useState("internal");
  const [bankName, setBankName] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [error, setError] = useState("");

  const handleTransfer = () => {
    setError("");

    if (!transferAmount || parseFloat(transferAmount) <= 0) {
      setError("Please enter a valid amount to transfer.");
      return;
    }
    if (parseFloat(transferAmount) > transferLimits[transferType]) {
      setError(`The maximum transfer limit for ${transferType} transfers is ${transferLimits[transferType]}.`);
      return;
    }
    if (!transferAccount) {
      setError("Please enter a valid account number.");
      return;
    }

    // Create new transaction
    const newTransaction = {
      transaction_date: new Date().toISOString().split("T")[0],
      transaction_type: transferType,
      amount: parseFloat(transferAmount),
      account_number: transferAccount,
    };
    setTransactions([...transactions, newTransaction]);
    setTransferAmount("");
    setTransferAccount("");
    setTransferType("internal");
    onClose();
  };

  const calculateTotalAmount = () => {
    const fee = transferFees[transferType] || 0;
    return parseFloat(transferAmount) + fee;
  };

  return (
    <Flex height="100vh">
      <CustomerSidebar />
      <Box width="78%" marginTop="30px" paddingLeft="40px">
        <HStack justify="space-between" marginBottom="10px">
          <Text fontSize="2xl" fontWeight="bold">All Transactions</Text>
          <Button onClick={onOpen} colorScheme="teal">Funds Transfer</Button>
        </HStack>
        <Box padding="20px" border="2px solid #06B6D4" borderRadius="10px">
          <HStack justify="space-between" padding="10px" bg="#F1F5F9" borderRadius="5px">
            <Text fontSize="lg" fontWeight="bold" flex="1">Date</Text>
            <Text fontSize="lg" fontWeight="bold" flex="1">Transaction</Text>
            <Text fontSize="lg" fontWeight="bold" flex="1" textAlign="left">Amount</Text>
            <Text fontSize="lg" fontWeight="bold" flex="1" textAlign="left">Account No</Text>
          </HStack>
          <VStack spacing="10px" align="stretch">
            {currentTransactions.map((transaction, index) => (
              <HStack justify="space-between" padding="10px" key={index}>
                <Text fontSize="lg" flex="1">{new Date(transaction.transaction_date).toLocaleDateString()}</Text>
                <Text fontSize="lg" flex="1">{transaction.transaction_type}</Text>
                <Text fontSize="lg" flex="1" color={transaction.transaction_type === "deposit" ? "green" : transaction.transaction_type === "withdrawal" ? "red" : "black"} textAlign="left">Ksh {transaction.amount}</Text>
                <Text fontSize="lg" flex="1" textAlign="left">{transaction.account_number}</Text>
              </HStack>
            ))}
          </VStack>

          <Flex justify="space-between" marginTop="20px">
            <Button isDisabled={currentPage === 1} onClick={() => setCurrentPage(prevPage => prevPage - 1)}>Previous</Button>
            <Text>Page {currentPage} of {totalPages}</Text>
            <Button isDisabled={currentPage === totalPages} onClick={() => setCurrentPage(prevPage => prevPage + 1)}>Next</Button>
          </Flex>
        </Box>

        {/* Funds Transfer Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Funds Transfer</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing="20px">
                <FormControl isInvalid={!!error}>
                  <Select value={transferType} onChange={(e) => setTransferType(e.target.value)} placeholder="Select transfer type">
                    <option value="internal">Internal Transfer</option>
                    <option value="external">External Transfer</option>
                  </Select>
                  <Input
                    placeholder="Amount to Transfer"
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                  <Input
                    placeholder={transferType === "external" ? "Recipient Account Number" : "Your Other Account Number"}
                    value={transferAccount}
                    onChange={(e) => setTransferAccount(e.target.value)}
                  />
                  {transferType === "external" && (
                    <>
                      <Input placeholder="Bank Name" onChange={(e) => setBankName(e.target.value)} />
                      <Input placeholder="SWIFT/BIC Code" onChange={(e) => setSwiftCode(e.target.value)} />
                    </>
                  )}
                  {error && <FormErrorMessage>{error}</FormErrorMessage>}
                </FormControl>
                <Text fontSize="sm">Transfer Fee: {transferFees[transferType]} Ksh</Text>
                <Text fontSize="sm">Total Amount: {calculateTotalAmount()} Ksh</Text>
                <Text fontSize="sm" color="gray.500">
                  Estimated processing time: {transferType === "internal" ? "Instant" : "1-3 business days"}
                </Text>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleTransfer}>Confirm Transfer</Button>
              <Button onClick={onClose} marginLeft={3}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}

export default CustomerTransactionDashboard;
