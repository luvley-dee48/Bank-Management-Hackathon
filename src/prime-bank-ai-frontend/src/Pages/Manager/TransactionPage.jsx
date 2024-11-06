import React, { useState, useEffect } from "react";

const transactionsData = [
  { transaction_id: "1", account_number: "1234813289", amount: "KSh 5,000.00", transaction_date: "2024-08-01", transaction_type: "Deposit" },
  { transaction_id: "2", account_number: "1234813290", amount: "KSh 3,200.00", transaction_date: "2024-08-02", transaction_type: "Withdrawal" },
  { transaction_id: "3", account_number: "1234813291", amount: "KSh 4,500.00", transaction_date: "2024-08-03", transaction_type: "Deposit" },
  { transaction_id: "4", account_number: "1234813292", amount: "KSh 2,750.00", transaction_date: "2024-08-04", transaction_type: "Withdrawal" },
  { transaction_id: "5", account_number: "1234813293", amount: "KSh 6,000.00", transaction_date: "2024-08-05", transaction_type: "Deposit" },
  { transaction_id: "6", account_number: "1234813294", amount: "KSh 1,800.00", transaction_date: "2024-08-06", transaction_type: "Withdrawal" },
  { transaction_id: "7", account_number: "1234813295", amount: "KSh 7,200.00", transaction_date: "2024-08-07", transaction_type: "Deposit" },
  { transaction_id: "8", account_number: "1234813296", amount: "KSh 3,500.00", transaction_date: "2024-08-08", transaction_type: "Loan Payment" },
  { transaction_id: "9", account_number: "1234813297", amount: "KSh 8,000.00", transaction_date: "2024-08-09", transaction_type: "Deposit" },
  { transaction_id: "10", account_number: "1234813298", amount: "KSh 2,200.00", transaction_date: "2024-08-10", transaction_type: "Withdrawal" },
];

function TransactionsPage({ accountNumber }) {
  const [transactions, setTransactions] = useState([]);
  const [allTransactions, setAllTransactions] = useState(transactionsData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTransactions(transactionsData.filter(transaction => transaction.account_number === accountNumber));
  }, [accountNumber]);

  useEffect(() => {
    if (searchTerm === '') {
      setTransactions(allTransactions); 
    } else {
      const filteredTransactions = allTransactions.filter(transaction =>
        transaction.account_number.includes(searchTerm)
      );
      setTransactions(filteredTransactions);
    }
  }, [searchTerm, allTransactions]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by account number"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          onClick={() => handleSearch({ target: { value: searchTerm } })} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50">ID</th>
              <th className="px-6 py-3 bg-gray-50">Amount</th>
              <th className="px-6 py-3 bg-gray-50">Date</th>
              <th className="px-6 py-3 bg-gray-50">Type</th>
              <th className="px-6 py-3 bg-gray-50">Account Number</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction.transaction_id}>
                  <td className="px-6 py-4">{transaction.transaction_id}</td>
                  <td className="px-6 py-4">{transaction.amount}</td>
                  <td className="px-6 py-4">{transaction.transaction_date}</td>
                  <td className="px-6 py-4">{transaction.transaction_type}</td>
                  <td className="px-6 py-4">{transaction.account_number}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-6 py-4">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsPage;
