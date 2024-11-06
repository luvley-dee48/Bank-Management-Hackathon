import React, { useState, useEffect } from 'react';

const loansData = [
  { loan_type: "Personal", loan_amount: 50000, interest_rate: 7.5 , loan_term: 12, customer_name: "Richard Brown" },
  { loan_type: "Home", loan_amount: 300000, interest_rate: 5.0, loan_term: 240, customer_name: "Emily Johnson" },
  { loan_type: "Auto", loan_amount: 150000, interest_rate: 6.0, loan_term: 60, customer_name: "Daniel Garcia" },
  { loan_type: "Educational", loan_amount: 80000, interest_rate: 4.5, loan_term: 48, customer_name: "Isabella Davis" },
  { loan_type: "Personal", loan_amount: 20000, interest_rate: 8.0, loan_term: 24, customer_name: "Michael James" },
  { loan_type: "Home", loan_amount: 500000, interest_rate: 5.5, loan_term: 360, customer_name: "Olivia Wilson" },
  { loan_type: "Auto", loan_amount: 100000, interest_rate: 6.5, loan_term: 72, customer_name: "Amy Johnson" },
  { loan_type: "Educational", loan_amount: 120000, interest_rate: 4.0, loan_term: 36, customer_name: "Liam Anderson" },
  { loan_type: "Personal", loan_amount: 25000, interest_rate: 7.0, loan_term: 18, customer_name: "Ava Davidson" },
];

const LoansPage = () => {
  const [loans, setLoans] = useState(loansData); // Use loansData directly
  const [lastName, setLastName] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSearch = () => {
    if (lastName === '') {
      setLoans(loansData); // Reset to original data if search term is cleared
    } else {
      const filteredLoans = loansData.filter(loan =>
        loan.customer_name.toLowerCase().includes(lastName.toLowerCase())
      );
      setLoans(filteredLoans);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Loans</h1>
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name to filter loans"
          className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      {loans.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Term</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loans.map((loan, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{loan.loan_type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{loan.loan_amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{loan.interest_rate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{loan.loan_term}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{loan.customer_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No loans found.</p>
      )}
    </div>
  );
};

export default LoansPage;
