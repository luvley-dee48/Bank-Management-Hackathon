import { Avatar, Box, VStack, Text, Spacer } from '@chakra-ui/react';
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
    <Box width="20%" bg="#FFFFFF" padding="20px" boxShadow="md">
      <VStack align="center" spacing="20px" height="30%">
        <Avatar name={customerName} src={avatarUrl} size="2xl" />
        <Text fontSize="2xl" fontWeight="bold">
          {customerName}
        </Text>
        <Text fontSize="lg">Customer</Text>
      </VStack>

      <VStack align="center" spacing="30px" width="100%" height="70%">
        <NavLink
          to="/CustomerDashboard"
          style={({ isActive }) => ({
            fontSize: 'xl',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#000' : '#4A5568',
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
            color: isActive ? '#000' : '#4A5568',
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
            color: isActive ? '#000' : '#4A5568',
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
            color: isActive ? '#000' : '#4A5568',
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
            color: isActive ? '#000' : '#4A5568',
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
            color: isActive ? '#000' : '#4A5568',
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
            color: isActive ? '#000' : '#4A5568',
            textDecoration: 'none',
          })}
        >
          Mobile Wallet Transfers
        </NavLink>
        <Spacer />
        <Text fontSize="xl" color="red" onClick={handleLogout} cursor="pointer">
          Log out
        </Text>
      </VStack>
    </Box>
  );
}

export default CustomerSidebar;
