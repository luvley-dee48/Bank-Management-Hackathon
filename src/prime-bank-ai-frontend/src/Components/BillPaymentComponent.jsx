import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function BillPaymentComponent() {
  const [amount, setAmount] = useState("");
  const [biller, setBiller] = useState("");

  const handlePayment = () => {
    // Logic for bill payment
    console.log(`Paying Ksh ${amount} to ${biller}`);
    // Reset fields after payment
    setAmount("");
    setBiller("");
  };

  return (
    <Box padding="20px" border="2px solid #06B6D4" borderRadius="10px">
      <Text fontSize="xl" fontWeight="bold">Bill Payments</Text>
      <VStack spacing="10px" marginTop="20px">
        <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Input placeholder="Biller Name" value={biller} onChange={(e) => setBiller(e.target.value)} />
        <Button onClick={handlePayment} colorScheme="teal">Pay Bill</Button>
      </VStack>
    </Box>
  );
}

export default BillPaymentComponent;
