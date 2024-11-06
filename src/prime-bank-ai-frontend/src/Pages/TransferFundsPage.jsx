import React, { useState } from "react";
import { Box, Flex, Text, VStack, Button, Input, Select, FormControl, FormLabel, FormErrorMessage, Image } from "@chakra-ui/react"; // Import Image for teller profile pictures
import { useNavigate } from "react-router-dom";

const tellers = [
    { 
      id: 1, 
      name: "Katana", 
      email: "Riojian1@gmail.com", 
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" 
    },
];

const TransferFundsPage = () => {
    const navigate = useNavigate();
    
    // State for fund transfer details
    const [transferAmount, setTransferAmount] = useState("");
    const [transferAccount, setTransferAccount] = useState("");
    const [transferType, setTransferType] = useState("internal");
    const [error, setError] = useState("");

    // Transfer limits and fees
    const transferLimits = { internal: 5000, external: 2000 };
    const transferFees = { internal: 0, external: 50 };

    const handleTransfer = () => {
        setError("");

        if (!transferAmount || parseFloat(transferAmount) <= 0) {
            setError("Please enter a valid amount to transfer.");
            return;
        }
        if (parseFloat(transferAmount) > transferLimits[transferType]) {
            setError(`The maximum transfer limit for ${transferType} transfers is ${transferLimits[transferType]}.`);
            return;
        }
        if (!transferAccount) {
            setError("Please enter a valid account number.");
            return;
        }

        // Simulate a successful transfer process
        console.log("Transfer successful:", { transferAmount, transferAccount, transferType });

        // Reset fields after transfer
        setTransferAmount("");
        setTransferAccount("");
        setTransferType("internal");
        // Optionally navigate back to previous page
        navigate("/tellers"); // Change this to the desired navigation path
    };

    const TellerSidebar = () => {
        return (
            <Box 
                w="20%" 
                p={4} 
                bg="teal.500" 
                height="100vh" 
                borderRight="1px" 
                borderColor="teal.600" 
                display="flex" 
                flexDirection="column"
            >
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
                <Flex justify="center" mt="auto" mb={6}>
                    <Button colorScheme="red" onClick={() => navigate("/")}>Log Out</Button> {/* Redirect to login or home */}
                </Flex>
            </Box>
        );
    };

    return (
        <Flex height="100vh" bg="#F0F4F8">
            <TellerSidebar />
            <Flex 
                flex="1" 
                alignItems="center" 
                justifyContent="center" 
                padding="20px"
            >
                <Box 
                    width="400px" 
                    padding="20px" 
                    borderRadius="8px" 
                    boxShadow="md" 
                    bg="white"
                >
                    <VStack spacing={4} align="stretch">
                        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Transfer Funds</Text>
                        <FormControl isInvalid={!!error}>
                            <FormLabel>Transfer Type</FormLabel>
                            <Select 
                                value={transferType} 
                                onChange={(e) => setTransferType(e.target.value)} 
                                placeholder="Select transfer type"
                            >
                                <option value="internal">Internal Transfer</option>
                                <option value="external">External Transfer</option>
                            </Select>
                            <FormLabel>Amount to Transfer</FormLabel>
                            <Input
                                placeholder="Amount"
                                type="number"
                                value={transferAmount}
                                onChange={(e) => setTransferAmount(e.target.value)}
                            />
                            <FormLabel>
                                {transferType === "external" ? "Recipient Account Number" : "Your Other Account Number"}
                            </FormLabel>
                            <Input
                                placeholder={transferType === "external" ? "Recipient Account Number" : "Your Other Account Number"}
                                value={transferAccount}
                                onChange={(e) => setTransferAccount(e.target.value)}
                            />
                            {error && <FormErrorMessage>{error}</FormErrorMessage>}
                        </FormControl>
                        <Text fontSize="sm">Transfer Fee: {transferFees[transferType]} Ksh</Text>
                        <Button colorScheme="blue" onClick={handleTransfer}>Confirm Transfer</Button>
                        <Button variant="outline" onClick={() => navigate("/tellers")}>Cancel</Button>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );
};

export default TransferFundsPage;
