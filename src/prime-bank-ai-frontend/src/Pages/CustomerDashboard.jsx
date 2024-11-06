import React, { useState, useEffect } from "react";
import { Flex, Box, VStack, HStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CustomerSidebar from "../Components/CustomerSidebar";
import ProfileSettings from "./ProfileSettings"; // Assuming this is a settings component for user profiles

function CustomerDashboard() {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState(
    sessionStorage.getItem("customerName") || "Guest"
  );
  const [transactions, setTransactions] = useState([]);
  const [accountBalance, setAccountBalance] = useState({
    checking: 5000, // Example data for account balances
    savings: 12000,
    loans: -3000,
  });
  const [accountNumber, setAccountNumber] = useState("12345678");
  const [accountType, setAccountType] = useState("Savings");
  const [interestRate, setInterestRate] = useState(2.5); // Example interest rate
  const [notifications, setNotifications] = useState([]);
  const [accountStatus, setAccountStatus] = useState("Active");

  // Sample transaction data for demonstration
  const sampleTransactions = [
    {
      transaction_date: "2024-11-01",
      transaction_type: "Deposit",
      amount: 2000,
      account_number: "12345678",
    },
    {
      transaction_date: "2024-11-02",
      transaction_type: "Withdrawal",
      amount: 500,
      account_number: "12345678",
    },
    {
      transaction_date: "2024-11-03",
      transaction_type: "Transfer",
      amount: 1000,
      account_number: "87654321",
    },
  ];

  useEffect(() => {
    // Replace this with an API call if needed
    setTransactions(sampleTransactions);
  }, []);

  // Calculate total savings
  const totalSavings = accountBalance.checking + accountBalance.savings;

  // Notification logic
  useEffect(() => {
    const alerts = [];

    // Transaction alerts
    transactions.forEach((transaction) => {
      if (
        transaction.transaction_type === "Withdrawal" &&
        transaction.amount > 1000
      ) {
        alerts.push(
          `Alert: Large withdrawal of Ksh ${transaction.amount} on ${transaction.transaction_date}.`
        );
      }
    });

    // Balance alerts
    if (accountBalance.checking < 1000) {
      alerts.push("Alert: Your checking balance is below Ksh 1000.");
    }

    // Account status alert
    if (accountBalance.loans < 0) {
      alerts.push("Warning: Your account has a negative balance in loans.");
    }

    // Positive notification for savings milestone
    if (totalSavings >= 15000) {
      alerts.push(
        "Congratulations! You have reached a savings milestone of Ksh 15,000!"
      );
    }

    setNotifications(alerts);
  }, [transactions, accountBalance]);

  // Account status logic
  useEffect(() => {
    setAccountStatus(accountBalance.loans < 0 ? "Suspended" : "Active");
  }, [accountBalance.loans]);

  const handleNavigate = () => {
    navigate("/CustomerTransactionDashboard");
  };

  // Render a single transaction row
  const TransactionRow = ({ transaction }) => (
    <HStack
      key={transaction.transaction_date}
      justify="space-between"
      padding="10px"
    >
      <Text fontSize="lg" flex="1">
        {new Date(transaction.transaction_date).toLocaleDateString()}
      </Text>
      <Text fontSize="lg" flex="1">
        {transaction.transaction_type}
      </Text>
      <Text
        fontSize="lg"
        color={
          transaction.transaction_type === "Deposit"
            ? "green"
            : transaction.transaction_type === "Withdrawal"
            ? "red"
            : "black"
        }
        flex="1"
        textAlign="left"
      >
        Ksh {transaction.amount}
      </Text>
      <Text fontSize="lg" flex="1" textAlign="left">
        {transaction.account_number}
      </Text>
    </HStack>
  );

  const recentTransactions = transactions.slice(-7);

  return (
    <Flex height="100vh">
      <CustomerSidebar />
      <Box flex="1" padding="30px">
        {/* Welcome Message */}
        <VStack align="start" spacing="10px">
          <Text fontSize="3xl">
            Welcome, <span style={{ color: "#06B6D4" }}>{customerName}</span>
          </Text>
          <Text fontSize="lg">
            Access & manage your account and transactions efficiently
          </Text>
        </VStack>

        {/* Quick View of Account Balances */}
        <Box
          width="100%"
          padding="30px"
          bg="#DAEEEB"
          borderRadius="10px"
          marginTop="20px"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Account Balances
          </Text>
          <VStack spacing="10px" align="start">
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Checking:</Text>
              <Text fontSize="lg" color="#06B6D4">
                Ksh {accountBalance.checking}
              </Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Savings:</Text>
              <Text fontSize="lg" color="#06B6D4">
                Ksh {accountBalance.savings}
              </Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Loans:</Text>
              <Text
                fontSize="lg"
                color={accountBalance.loans < 0 ? "red" : "#06B6D4"}
              >
                Ksh {accountBalance.loans}
              </Text>
            </HStack>
            <HStack
              justify="space-between"
              width="100%"
              borderTop="1px solid #ccc"
              paddingTop="10px"
              marginTop="10px"
            >
              <Text fontSize="lg" fontWeight="bold">
                Total Savings:
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="#06B6D4">
                Ksh {totalSavings}
              </Text>
            </HStack>
          </VStack>
        </Box>

        {/* Recent Transactions */}
        <Box width="100%" marginTop="30px">
          <HStack justify="space-between" marginBottom="10px">
            <Text fontSize="2xl" fontWeight="bold">
              Recent Transactions
            </Text>
            <Button
              variant="outline"
              colorScheme="teal"
              size="sm"
              onClick={handleNavigate}
            >
              View All
            </Button>
          </HStack>
          <Box padding="20px" border="2px solid #06B6D4" borderRadius="10px">
            <HStack
              justify="space-between"
              padding="10px"
              bg="#F1F5F9"
              borderRadius="5px"
            >
              <Text fontSize="lg" fontWeight="bold" flex="1">
                Date
              </Text>
              <Text fontSize="lg" fontWeight="bold" flex="1">
                Transaction
              </Text>
              <Text fontSize="lg" fontWeight="bold" flex="1" textAlign="left">
                Amount
              </Text>
              <Text fontSize="lg" fontWeight="bold" flex="1" textAlign="left">
                Account No
              </Text>
            </HStack>

            <VStack spacing="10px" align="stretch">
              {recentTransactions.map((transaction, index) => (
                <TransactionRow key={index} transaction={transaction} />
              ))}
            </VStack>
          </Box>
        </Box>

        {/* Notifications */}
        <Box width="100%" marginTop="30px">
          <Text fontSize="2xl" fontWeight="bold">
            Notifications
          </Text>
          <Box
            padding="20px"
            border="2px solid #06B6D4"
            borderRadius="10px"
            marginTop="10px"
          >
            <VStack spacing="10px" align="start">
              {notifications.length > 0 ? (
                notifications.map((alert, index) => (
                  <Text
                    key={index}
                    fontSize="lg"
                    color={
                      alert.startsWith("Congratulations")
                        ? "green.500"
                        : "orange.500"
                    }
                  >
                    {alert}
                  </Text>
                ))
              ) : (
                <Text fontSize="lg" color="gray.500">
                  No notifications at this time.
                </Text>
              )}
            </VStack>
          </Box>
        </Box>

        {/* Account Summary */}
        <Box
          width="100%"
          padding="20px"
          bg="#DAEEEB"
          borderRadius="10px"
          marginTop="30px"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Account Summary
          </Text>
          <VStack spacing="15px" align="start">
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Account Type:</Text>
              <Text fontSize="lg">{accountType}</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Interest Rate:</Text>
              <Text fontSize="lg">{interestRate}%</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Account Number:</Text>
              <Text fontSize="lg">{accountNumber}</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text fontSize="lg">Account Status:</Text>
              <Text
                fontSize="lg"
                color={accountStatus === "Active" ? "green.500" : "red.500"}
              >
                {accountStatus}
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default CustomerDashboard;
