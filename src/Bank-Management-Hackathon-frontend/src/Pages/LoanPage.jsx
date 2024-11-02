import React from "react";
import { Box, Flex, Image, Text, VStack, Stack, Button, Input, Select, FormControl, FormLabel, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

const tellers = [
  { id: 1, name: "Katana", email: "Riojian1@gmail.com", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" },
];

const LoanApplicationForm = () => {
  return (
    <Box w="full" maxW="800px" bg="white" p={8} boxShadow="md" borderRadius="lg">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Loan Application Form</Text>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <GridItem>
          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter First Name" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter Last Name" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="phoneNo">
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter Phone Number" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" placeholder="Enter Address" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Enter Email Address" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="occupation">
            <FormLabel>Occupation</FormLabel>
            <Input type="text" placeholder="Enter Occupation" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="loanAmount">
            <FormLabel>Loan Amount</FormLabel>
            <Input type="number" placeholder="Enter Loan Amount" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl id="applicationDate">
            <FormLabel>Application Date</FormLabel>
            <Input type="date" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl id="repayDate">
            <FormLabel>Repayment Date</FormLabel>
            <Input type="date" />
          </FormControl>
        </GridItem>
      </Grid>

      <Button colorScheme="teal" size="lg" mt={4}>Submit Application</Button>
    </Box>
  );
};

const TellerSidebar = () => {
  return (
    <Box w="20%" p={4} bg="teal.500" height="100vh" borderRight="1px" borderColor="teal.600" display="flex" flexDirection="column">
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4} color="white"></Text>
        {tellers.map(teller => (
          <VStack key={teller.id} alignItems="center" spacing={3} p={2} borderBottom="1px" borderColor="teal.600" mb={4} _last={{ mb: 0 }}>
            <Image borderRadius="full" boxSize="100px" src={teller.imageUrl} alt={teller.name} />
            <Text fontWeight="bold" color="white">{teller.name}</Text>
            <Text color="gray.200">{teller.email}</Text>
            <Text color="teal.200" fontWeight="medium" border="1px" borderColor="teal.200" borderRadius="md" px={2} py={1} textAlign="center">
              Teller No. {teller.id}
            </Text>
          </VStack>
        ))}
      </Box>

      <Flex justify="center" mt="auto" mb={6}>
        <Button colorScheme="red">Log Out</Button>
      </Flex>
    </Box>
  );
};

const TransactionPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/tellers");
  };

  return (
    <Flex height="100vh">
      <TellerSidebar />
      <Flex flex="1" p={6} bg="gray.50" alignItems="center" justifyContent="center" position="relative">
        <IconButton
          aria-label="Close"
          icon={<MdClose />}
          position="absolute"
          top={4}
          right={4}
          onClick={handleClose}
          size="lg"
          colorScheme="teal"
        />
        <LoanApplicationForm />
      </Flex>
    </Flex>
  );
};

export default TransactionPage;