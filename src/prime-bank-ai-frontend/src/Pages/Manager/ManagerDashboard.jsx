import React, { useState } from "react";
import { Box, Flex, Text, Button, IconButton, VStack, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FaTachometerAlt, FaUser, FaWallet, FaExchangeAlt, FaBriefcase, FaSignOutAlt } from "react-icons/fa";
import DashboardPage from "./Dashboard";
import CustomersPage from "./CustomersPage";
import AccountsPage from "./AccountsPage";
import TransactionsPage from "./TransactionPage";
import LoansPage from "./LoansPage";

const ManagerDashboard = () => {
  const [showContent, setShowContent] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleClose = () => {
    setShowContent("dashboard");
  };

  return (
    <Flex direction="column" h="100vh" bg="gray.50">
      
      <Flex
        direction="row"
        bg="teal.600"
        p={4}
        color="white"
        align="center"
        justify="space-between"
        boxShadow="md"
      >
        <Text fontSize="2xl" fontWeight="bold">ROSS BANK - Manager Dashboard</Text>
        <IconButton
          aria-label="Close"
          icon={<MdClose />}
          onClick={handleClose}
          variant="outline"
          colorScheme="whiteAlpha"
          size="md"
        />
      </Flex>

      
      <Flex direction="row" flex="1">
        
        <Box w="20%" bg="teal.700" color="white" p={4} boxShadow="md" display="flex" flexDirection="column" justifyContent="space-between">
          <VStack spacing={4} align="stretch">
            <Button
              leftIcon={<FaTachometerAlt />}
              onClick={() => setShowContent("dashboard")}
              w="100%"
              size="md"
              bg="teal.500"
              _hover={{ bg: "teal.600" }}
              color="white"
              fontWeight="bold"
            >
              Dashboard
            </Button>
            <Button
              leftIcon={<FaUser />}
              onClick={() => setShowContent("customers")}
              w="100%"
              size="md"
              bg="teal.500"
              _hover={{ bg: "teal.600" }}
              color="white"
              fontWeight="bold"
            >
              Customers
            </Button>
            <Button
              leftIcon={<FaWallet />}
              onClick={() => setShowContent("accounts")}
              w="100%"
              size="md"
              bg="teal.500"
              _hover={{ bg: "teal.600" }}
              color="white"
              fontWeight="bold"
            >
              Accounts
            </Button>
            <Button
              leftIcon={<FaExchangeAlt />}
              onClick={() => setShowContent("transactions")}
              w="100%"
              size="md"
              bg="teal.500"
              _hover={{ bg: "teal.600" }}
              color="white"
              fontWeight="bold"
            >
              Transactions
            </Button>
            <Button
              leftIcon={<FaBriefcase />}
              onClick={() => setShowContent("loans")}
              w="100%"
              size="md"
              bg="teal.500"
              _hover={{ bg: "teal.600" }}
              color="white"
              fontWeight="bold"
            >
              Loans
            </Button>
          </VStack>
          <VStack spacing={4} align="stretch">
            <Divider borderColor="whiteAlpha.400" />
            <Button
              leftIcon={<FaSignOutAlt />}
              colorScheme="red"
              onClick={handleLogout}
              w="100%"
              size="md"
              color="white"
              fontWeight="bold"
            >
              Log Out
            </Button>
          </VStack>
        </Box>

        
        <Box flex="1" p={6} overflow="auto" boxShadow="md">
          {showContent === "dashboard" && <DashboardPage />}
          {showContent === "customers" && <CustomersPage />}
          {showContent === "accounts" && <AccountsPage />}
          {showContent === "transactions" && <TransactionsPage />}
          {showContent === "loans" && <LoansPage />}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ManagerDashboard;