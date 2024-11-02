import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Bank_Management_Hackathon_backend } from "declarations/Bank-Management-Hackathon-backend";
import LandingPage from "./Pages/LandingPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginForm from "./Components/LoginForm";
import TellersPage from "./Pages/TellersPage";
import TellerDashboard from "./Components/TellerDashboard";
import DepositPage from "./Pages/DepositPage";
import WithdrawPage from "./Pages/WithdrawPage";
import LoanPage from "./Pages/LoanPage";
import CustomerDashboard from "./Pages/CustomerDashboard";
import CustomerTransactionDashboard from "./Pages/CustomerTransactionDashboard";
import BillPaymentComponent from "./Components/BillPaymentComponent";
import CustomerAccountDashboard from "./Pages/CustomerAccountDashboard";
import CustomerLoanDashboard from "./Pages/CustomerLoanDashboard";
import ProfileSettings from "./Pages/ProfileSettings";
function App() {
  return (
    <ChakraProvider>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/tellers" element={<TellersPage />} />
          <Route path="/teller-dashboard" element={<TellerDashboard />} />
          <Route path="/transaction/Deposit" element={<DepositPage />} />
          <Route path="/transaction/Withdraw" element={<WithdrawPage />} />
          <Route path="/transaction/Loan" element={<LoanPage />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route
            path="/CustomerTransactionDashboard"
            element={<CustomerTransactionDashboard />}
          />
          <Route
            path="/BillPaymentComponent"
            element={<BillPaymentComponent />}
          />
          <Route
            path="/CustomerAccountDashboard"
            element={<CustomerAccountDashboard />}
          />
          <Route
            path="/CustomerLoanDashboard"
            element={<CustomerLoanDashboard />}
          />
          <Route path="/ProfileSettings" element={<ProfileSettings />} />
        </Routes>
      </main>
    </ChakraProvider>
  );
}

export default App;
