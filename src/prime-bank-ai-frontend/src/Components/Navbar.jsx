import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  Spacer,
  useDisclosure,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  return (
    <Box
      bg="mintcream"
      py={4}
      px={8}
      boxShadow="md"
      maxWidth="90%"
      mx="auto"
      mt={4}
      borderRadius="lg"
    >
      <Flex align="center" wrap="wrap">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.500, green.500)"
          bgClip="text"
        >
          PRIME BANK
        </Text>

        <IconButton
          aria-label="Toggle navigation"
          icon={isMenuOpen ? <FaTimes /> : <FaBars />}
          onClick={isMenuOpen ? onMenuClose : onMenuOpen}
          variant="outline"
          colorScheme="teal"
          ml={2}
          display={{ base: "inline-flex", md: "none" }}
        />

        <Spacer />

        {/* Mobile Menu */}
        <Collapse in={isMenuOpen} animateOpacity>
          <Flex
            direction="column"
            align="center"
            display={{ base: "flex", md: "none" }}
            mt={4}
            gap={4} // Adjust gap for spacing between mobile links
          >
            <Link href="#home" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }} onClick={onMenuClose}>
              Home
            </Link>
            <Link href="#accounts" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }} onClick={onMenuClose}>
              Accounts
            </Link>
            <Link href="#about-us" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }} onClick={onMenuClose}>
              About us
            </Link>
            <Link href="#contact" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }} onClick={onMenuClose}>
              Contact us
            </Link>
            <Button variant="outline" colorScheme="teal" rounded="full" onClick={onMenuClose}>
              Sign up
            </Button>
            <Button colorScheme="teal" rounded="full" onClick={onLoginOpen}>
              Login
            </Button>
          </Flex>
        </Collapse>

        {/* Desktop Menu */}
        <Flex display={{ base: "none", md: "flex" }} flex="1" justify="center" gap={8}>
          <Link href="#home" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }}>
            Home
          </Link>
          <Link href="#accounts" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }}>
            Accounts
          </Link>
          <Link href="#about-us" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }}>
            About us
          </Link>
          <Link href="#contact" fontSize="lg" fontWeight="medium" _hover={{ color: "blue.600" }}>
            Contact us
          </Link>
        </Flex>

        <Spacer />

        {/* Desktop Buttons */}
        <Flex display={{ base: "none", md: "flex" }}>
          <Button as={RouterLink} to="/signup" variant="outline" colorScheme="teal" mr={2} rounded="full">
            Sign up
          </Button>
          <Button colorScheme="teal" rounded="full" onClick={onLoginOpen}>
            Login
          </Button>
        </Flex>
      </Flex>

      {/* Login Form Collapse */}
      <Collapse in={isLoginOpen} animateOpacity>
        <Box mt={4}>
          <LoginForm isOpen={isLoginOpen} onClose={onLoginClose} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
