import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bank_Management_Hackathon_backend } from 'declarations/Bank-Management-Hackathon-backend';

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      // Here you'll call your Motoko backend function once implemented
      // Example: const result = await Bank_Management_Hackathon_backend.login(username, email, password);
      
      // For now, let's implement basic routing based on email
      if (email.toLowerCase().includes('manager')) {
        navigate('/manager-dashboard');
      } else if (email.toLowerCase().includes('teller')) {
        navigate('/tellers');
      } else {
        navigate('/CustomerDashboard');
      }
      
      onClose();
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70">
      <div className="relative bg-white flex rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
        >
          &times;
        </button>

        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-green-300">PRIME BANK</h1>
          <h2 className="text-xl font-semibold text-center mb-4">Welcome Back</h2>
          <p className="text-center mb-6">Trusted to allow you to make safe and seamless transactions</p>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                placeholder='James'
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder='James@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-500 text-white font-semibold rounded-md focus:outline-none"
            >
              Log In
            </button>
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          </form>
        </div>
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/010/417/197/non_2x/coins-and-money-growing-plant-for-finance-and-banking-saving-money-or-interest-increasing-concept-business-growth-free-photo.jpg")' }}
        ></div>
      </div>
    </div>
  );
};

export default LoginForm;
