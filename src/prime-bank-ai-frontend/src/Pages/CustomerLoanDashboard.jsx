import React from "react";
import CustomerSidebar from "../Components/CustomerSidebar";
import {
  Flex,
  Box,
  VStack,
  HStack,
  Input,
  Text,
  Button,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Alert,
  AlertIcon,
  Checkbox,
} from "@chakra-ui/react";

function CustomerLoanDashboard() {
  // Sample loan data for display
  const loanData = {
    loanBalance: 15000,
    paymentDueDate: "2024-12-01",
    interestRate: "5%",
  };

  return (
    <Flex height="100vh">
      <CustomerSidebar />
      <Box
        width="60%"
        margin="auto"
        padding="30px"
        bg="#F0F4F8"
        borderRadius="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing="30px" align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Loan Application Form
          </Text>

          {/* Personal Information Section */}
          <Text fontSize="lg" fontWeight="bold">
            Personal Information
          </Text>
          <HStack spacing="20px">
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input bg="#DAEEEB" placeholder="Full Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input bg="#DAEEEB" type="tel" placeholder="Phone" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input bg="#DAEEEB" placeholder="Email" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input bg="#DAEEEB" placeholder="Address, City, ZIP" />
          </FormControl>

          {/* Identification Section */}
          <Text fontSize="lg" fontWeight="bold">
            Identification
          </Text>
          <HStack spacing="20px">
            <FormControl>
              <FormLabel>Government-issued ID</FormLabel>
              <Input bg="#DAEEEB" type="file" />
            </FormControl>
            <FormControl>
              <FormLabel>SSN</FormLabel>
              <Input bg="#DAEEEB" placeholder="Social Security Number" />
            </FormControl>
          </HStack>

          {/* Employment and Income Details */}
          <Text fontSize="lg" fontWeight="bold">
            Employment and Income Details
          </Text>
          <HStack spacing="20px">
            <FormControl>
              <FormLabel>Occupation</FormLabel>
              <Input bg="#DAEEEB" placeholder="Occupation" />
            </FormControl>
            <FormControl>
              <FormLabel>Employer</FormLabel>
              <Input bg="#DAEEEB" placeholder="Employer Name" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Income Verification (Upload pay stubs, etc.)</FormLabel>
            <Input bg="#DAEEEB" type="file" />
          </FormControl>

          {/* Loan Specifics */}
          <Text fontSize="lg" fontWeight="bold">
            Loan Specifics
          </Text>
          <HStack spacing="20px">
            <FormControl>
              <FormLabel>Loan Amount</FormLabel>
              <Input bg="#DAEEEB" placeholder="Loan Amount" />
            </FormControl>
            <FormControl>
              <FormLabel>Purpose of Loan</FormLabel>
              <Input bg="#DAEEEB" placeholder="Purpose (e.g., home purchase)" />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Repayment Terms</FormLabel>
            <Input bg="#DAEEEB" placeholder="Repayment Terms" />
          </FormControl>

          {/* Financial Information */}
          <Text fontSize="lg" fontWeight="bold">
            Financial Information
          </Text>
          <HStack spacing="20px">
            <FormControl>
              <FormLabel>Monthly Expenses</FormLabel>
              <Input bg="#DAEEEB" placeholder="Monthly Expenses" />
            </FormControl>
            <FormControl>
              <FormLabel>Debt Obligations</FormLabel>
              <Input bg="#DAEEEB" placeholder="Existing Debts" />
            </FormControl>
          </HStack>

          {/* Credit Information */}
          <FormControl>
            <Checkbox colorScheme="teal">
              I consent to a credit check to evaluate my creditworthiness.
            </Checkbox>
          </FormControl>

          {/* Signature and Consent */}
          <Text fontSize="lg" fontWeight="bold">
            Signature and Consent
          </Text>
          <FormControl>
            <FormLabel>Signature</FormLabel>
            <Input bg="#DAEEEB" placeholder="Type Full Name as Signature" />
          </FormControl>
          <FormControl>
            <Checkbox colorScheme="teal">
              I acknowledge the loan terms, interest rates, and any fees.
            </Checkbox>
          </FormControl>

          <Button
            width="100px"
            colorScheme="teal"
            bg="#06B6D4"
            color="white"
            alignSelf="center"
          >
            Apply
          </Button>

          {/* Loan Management Section */}
          <Box marginTop="60px">
            <Text fontSize="xl" fontWeight="bold" textAlign="center">
              Loan Management
            </Text>
            <Alert status="info" marginY="10px">
              <AlertIcon />
              Manage your loan details below.
            </Alert>
            <Table variant="simple" colorScheme="teal" marginTop="20px">
              <Thead>
                <Tr>
                  <Th>Loan Balance</Th>
                  <Th>Payment Due Date</Th>
                  <Th>Interest Rate</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Ksh {loanData.loanBalance}</Td>
                  <Td>{loanData.paymentDueDate}</Td>
                  <Td>{loanData.interestRate}</Td>
                  <Td>
                    <Button colorScheme="green" size="sm" marginRight="10px">
                      Make Payment
                    </Button>
                    <Button colorScheme="blue" size="sm">
                      Pay Off Early
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default CustomerLoanDashboard;
