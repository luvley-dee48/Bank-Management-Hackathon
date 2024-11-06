import React from 'react';
import { Box, Flex, Text, Image, HStack } from "@chakra-ui/react";
import profilePic from "/src/assets/_.jpeg"

const DashboardPage = () => (
  <Box bg="white" p={6} rounded="md" shadow="md">
    <Text fontSize="2xl" fontWeight="bold" mb={4}>Dashboard Overview</Text>
    <Flex direction="column" alignItems="center" mb={6}>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={profilePic}
        alt="Profile Picture"
        mb={4}
      />
      <Text fontSize="lg" fontWeight="bold" mb={2}>Daniella Pearse</Text>
      <Text fontSize="md" color="gray.600">Manager</Text>
      <Text fontSize="md" color="gray.600">Nairobi, Kenya</Text>
      <Text fontSize="md" color="gray.600" mt={2}>Phone: 0710781681</Text>
      <Text fontSize="md" color="gray.600" mt={2}>Email: DaniellaP@gmail.com</Text>
      <Text fontSize="md" color="gray.600" mt={2}>Address: South-Branch, 297-5th Avenue</Text>
    </Flex>
    <HStack spacing={8} w="full" justifyContent="space-around">
      <Box textAlign="center" bg="teal.100" p={4} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold">10</Text>
        <Text fontSize="md" color="gray.600">Customers</Text>
      </Box>
      <Box textAlign="center" bg="teal.100" p={4} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold">10</Text>
        <Text fontSize="md" color="gray.600">Accounts</Text>
      </Box>
      <Box textAlign="center" bg="teal.100" p={4} rounded="md" shadow="md">
        <Text fontSize="xl" fontWeight="bold">10</Text>
        <Text fontSize="md" color="gray.600">Loans</Text>
      </Box>
    </HStack>
  </Box>
);

export default DashboardPage;