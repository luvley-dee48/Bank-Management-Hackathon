import React, { useState, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Text } from '@chakra-ui/react';

function ProfileSettings() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Replace this with an API call to fetch user data
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    };
    setUserData(user);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit user data to the server (implement the API call)
    console.log('Updated user data:', userData);
  };

  return (
    <Box width="100%" marginTop="30px" padding="30px" borderRadius="10px" bg="#DAEEEB">
      <Text fontSize="2xl" fontWeight="bold">Profile Settings</Text>
      <VStack as="form" spacing="20px" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input name="firstName" value={userData.firstName} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input name="lastName" value={userData.lastName} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={userData.email} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input name="phone" value={userData.phone} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input name="address" value={userData.address} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal">Save Changes</Button>
      </VStack>
    </Box>
  );
}

export default ProfileSettings;
