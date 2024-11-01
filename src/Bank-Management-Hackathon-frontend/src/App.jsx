import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Bank_Management_Hackathon_backend } from 'declarations/Bank-Management-Hackathon-backend';
import LandingPage from './Pages/LandingPage';
import SignUpPage from './Pages/SignUpPage';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </ChakraProvider>
  );
}

export default App;
