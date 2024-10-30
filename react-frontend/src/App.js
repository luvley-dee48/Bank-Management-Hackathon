import './App.css';
import React, { useState } from 'react';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Placeholder: replace with actual login logic
    alert("Logging in...");
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Placeholder: replace with actual signup logic
    alert("Signing up...");
    setIsLoggedIn(true);
  };

  return (
    <div style={{ textAlign: "center",
     marginTop: "20vh",
     backgroundColor: "#282c34",  // Set the background color
        color: "#ffffff",             // Set the font color
        minHeight: "100vh",
        padding: "20px",
      }}>
      <h1>SMART BANKING MANAGEMENT</h1>
      {!isLoggedIn ? (
        <>
       
          <button
            onClick={handleLogin}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",  // Button background color
              color: "#ffffff",            // Button font color
              border: "none",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#008CBA",  // Button background color
              color: "#ffffff",            // Button font color
              border: "none",
              borderRadius: "5px",
            }}
          >
            Signup
          </button>
        </>
      ) : (
        <h2>You are logged in!</h2>
      )}
    </div>
  );
}

export default App;


