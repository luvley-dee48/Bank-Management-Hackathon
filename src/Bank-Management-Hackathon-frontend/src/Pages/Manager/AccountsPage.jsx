import React, { useState , useEffect} from 'react';


const accountsData = [
  { accountNumber: "1234813289", balance: "KSh 1,200.00", name: "Richard Brown" },
  { accountNumber: "1234813290", balance: "KSh 2,300.00", name: "Emily Johnson" },
  { accountNumber: "1234813291", balance: "KSh 3,400.00", name: "Daniel Garcia" },
  { accountNumber: "1234813292", balance: "KSh 4,500.00", name: "Isabella Davis" },
  { accountNumber: "1234813293", balance: "KSh 5,600.00", name: "Michael James" },
  { accountNumber: "1234813294", balance: "KSh 6,700.00", name: "Olivia Wilson" },
  { accountNumber: "1234813295", balance: "KSh 7,800.00", name: "Liam Anderson" },
  { accountNumber: "1234813296", balance: "KSh 8,900.00", name: "Ava Davidson" },
  { accountNumber: "1234813297", balance: "KSh 9,000.00", name: "Sophia Martinez" },
  { accountNumber: "1234813298", balance: "KSh 10,100.00", name: "Noah Thompson" },
];

const AccountsPage = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState('');
  const [accountNumber, setAccountNumber] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 

  
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        if (!searchTerm) return;

        let url = `http://127.0.0.1:5000/accounts/${searchTerm}`; 
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Account not found');
          } else if (response.status === 400) {
            setError('Account number is required');
          } else {
            throw new Error('Network response was not ok');
          }
          setAccount(null);
        } else {
          const data = await response.json();
          setAccount(data);
          setError('');
        }
      } catch (error) {
        console.error('There was an error fetching account!', error);
        setError('Failed to fetch account');
      }
    };

    fetchAccount(); 
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(accountNumber); 
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Account Details</h1>
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Enter account number to search"
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {account ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between text-gray-600 mb-4">
            <span className="font-semibold">Account Number:</span>
            <span>{account.account_number}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-4">
            <span className="font-semibold">Customer Name:</span>
            <span>{account.customer_name}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-4">
            <span className="font-semibold">Balance:</span>
            <span>{account.balance}</span>
          </div>
        </div>
      ) : (
        !error && <p className="text-gray-600">Enter an account number to search.</p>
      )}
    </div>
  );
};

export default AccountsPage;