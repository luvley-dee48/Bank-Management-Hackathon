import React, { useState } from "react";
import { Box, StatGroup, Stat, StatLabel, StatNumber, Button, Input, useToast } from "@chakra-ui/react";

const TellerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [accountDetails, setAccountDetails] = useState(null);
  const toast = useToast();

  const dailyStats = {
    totalTransactions: 50,
    pendingApprovals: 5,
    totalDeposits: 20000,
    totalWithdrawals: 15000,
  };

  const handleAccountSearch = () => {
    if (!searchQuery) {
      toast({
        title: "Search Error",
        description: "Please enter an account number or name.",
        status: "error",
      });
      return;
    }
    
    // Mock account search logic
    const mockAccount = { accountNumber: searchQuery, name: "John Doe", balance: 5000 }; // Replace with real search logic
    if (!mockAccount) {
      toast({
        title: "Account Not Found",
        description: "No account matches your search.",
        status: "warning",
      });
      return;
    }

    setAccountDetails(mockAccount);
    toast({
      title: "Account Found",
      description: `Account number: ${mockAccount.accountNumber} belongs to ${mockAccount.name}`,
      status: "success",
    });
  };

  return (
    <Box p={5}>
      <StatGroup mb={5}>
        <Stat>
          <StatLabel>Total Transactions</StatLabel>
          <StatNumber>{dailyStats.totalTransactions}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Pending Approvals</StatLabel>
          <StatNumber>{dailyStats.pendingApprovals}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Deposits</StatLabel>
          <StatNumber>${dailyStats.totalDeposits}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Withdrawals</StatLabel>
          <StatNumber>${dailyStats.totalWithdrawals}</StatNumber>
        </Stat>
      </StatGroup>

      <Input
        placeholder="Search for Account"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button mt={2} colorScheme="teal" onClick={handleAccountSearch}>Search</Button>

      {accountDetails && (
        <Box mt={5}>
          <h3>Account Details:</h3>
          <p>Account Number: {accountDetails.accountNumber}</p>
          <p>Name: {accountDetails.name}</p>
          <p>Balance: ${accountDetails.balance}</p>
        </Box>
      )}
    </Box>
  );
};

export default TellerDashboard;
