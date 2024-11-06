import React from 'react';
import { Box, Text, VStack, Image } from '@chakra-ui/react';

const tellers = [
  { id: 1, name: "MARCUS", email: "Riojian1@gmail.com", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" },
];

const TellersSidebar = () => {
  return (
    <Box p={4}>
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
          _last={{ mb: 0 }}
        >
          <Image
            borderRadius="full"
            boxSize="100px"
            src={teller.imageUrl}
            alt={teller.name}
          />
          <Text fontWeight="bold" color="white">{teller.name}</Text>
          <Text color="gray.200">{teller.email}</Text>
          <Text
            color="teal.200"
            fontWeight="medium"
            border="1px"
            borderColor="teal.200"
            borderRadius="md"
            px={2}
            py={1}
            textAlign="center"
          >
            Teller No. {teller.id}
          </Text>
        </VStack>
      ))}
    </Box>
  );
};

export default TellersSidebar;
