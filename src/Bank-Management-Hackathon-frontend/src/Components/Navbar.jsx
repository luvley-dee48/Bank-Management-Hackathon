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
          ROSS BANK
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

        
        <Collapse in={isMenuOpen} animateOpacity>
          <Flex
            direction="column"
            align="center"
            display={{ base: "flex", md: "none" }}
            mt={4}
          >
            <Link
              href="#home"
              mb={2}
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.600" }}
              onClick={onMenuClose} 
            >
              Home
            </Link>
            <Link
              href="#accounts"
              mb={2}
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.600" }}
              onClick={onMenuClose}
            >
              Accounts
            </Link>
            <Link
              href="#about-us"
              mb={2}
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.600" }}
              onClick={onMenuClose}
            >
              About us
            </Link>
            <Link
              href="#contact"
              mb={2}
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.600" }}
              onClick={onMenuClose}
            >
              Contact us
            </Link>
            <Button variant="outline" colorScheme="teal" mb={2} rounded="full">
              Sign up
            </Button>
            <Button colorScheme="teal" rounded="full" onClick={onLoginOpen}>
              Login
            </Button>
          </Flex>
        </Collapse>

        
        <Flex display={{ base: "none", md: "flex" }} flex="1" justify="center">
          <Link
            href="#home"
            mx={2}
            fontSize="lg"
            fontWeight="medium"
            _hover={{ color: "blue.600" }}
          >
            Home
          </Link>
          <Link
            href="#accounts"
            mx={2}
            fontSize="lg"
            fontWeight="medium"
            _hover={{ color: "blue.600" }}
          >
            Accounts
          </Link>
          <Link
            href="#about-us"
            mx={2}
            fontSize="lg"
            fontWeight="medium"
            _hover={{ color: "blue.600" }}
          >
            About us
          </Link>
          <Link
            href="#contact"
            mx={2}
            fontSize="lg"
            fontWeight="medium"
            _hover={{ color: "blue.600" }}
          >
            Contact us
          </Link>
        </Flex>

        <Spacer />

        <Flex display={{ base: "none", md: "flex" }}>
          <Button
            as={RouterLink}
            to="/signup"
            variant="outline"
            colorScheme="teal"
            mr={2}
            rounded="full"
          >
            Sign up
          </Button>
          <Button colorScheme="teal" rounded="full" onClick={onLoginOpen}>
            Login
          </Button>
        </Flex>
      </Flex>

      
      <Collapse in={isLoginOpen} animateOpacity>
        <Box mt={4}>
          <LoginForm isOpen={isLoginOpen} onClose={onLoginClose} />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;