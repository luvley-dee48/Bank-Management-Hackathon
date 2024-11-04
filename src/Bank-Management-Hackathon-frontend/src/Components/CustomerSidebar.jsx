import { Avatar, Box, VStack, Text, Spacer, Button } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function CustomerSidebar() {
  const navigate = useNavigate();

  const customerName = sessionStorage.getItem('customerName') || 'Guest';
  const avatarUrl = sessionStorage.getItem('avatarUrl') || '/path/to/default/avatar.png';

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <Box width="20%" bg="teal.500" padding="20px" boxShadow="md" height="100vh">
      <VStack align="center" spacing="20px" height="30%">
        <Avatar name={customerName} src={avatarUrl} size="2xl" />
        <Text fontSize="2xl" fontWeight="bold" color="white">
          {customerName}
        </Text>
        <Text fontSize="lg" color="white">Customer</Text>
      </VStack>

      <VStack align="center" spacing="30px" width="100%" height="70%">
        <NavLink
          to="/CustomerDashboard"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/CustomerAccountDashboard"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Account
        </NavLink>
        <NavLink
          to="/CustomerLoanDashboard"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Loans
        </NavLink>
        <NavLink
          to="/CustomerTransactionDashboard"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Transactions
        </NavLink>
        <NavLink
          to="/transfer"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Funds Transfer
        </NavLink>
        <NavLink
          to="/bill-payments"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Bill Payments
        </NavLink>
        <NavLink
          to="/wallet-transfers"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#000', // All text black
            textDecoration: 'none',
          })}
        >
          Mobile Wallet Transfers
        </NavLink>
        <Spacer />
        <Button 
          onClick={handleLogout} 
          colorScheme="green" 
          backgroundColor="#009688" // A lighter green resembling teal, but darker than standard teal
          color="white" 
          paddingX="10px" // Padding to fit text closely
          whiteSpace="nowrap" // Prevent text wrapping
        >
          Log out
        </Button>
      </VStack>
    </Box>
  );
}

export default CustomerSidebar;
