import React,{ useState,useEffect} from "react";


// const transactionsData = [
//   { accountNumber: "1234813289", amount: "KSh 5,000.00", date: "2024-08-01", type: "Deposit" },
//   { accountNumber: "1234813290", amount: "KSh 3,200.00", date: "2024-08-02", type: "Withdrawal" },
//   { accountNumber: "1234813291", amount: "KSh 4,500.00", date: "2024-08-03", type: "Deposit" },
//   { accountNumber: "1234813292", amount: "KSh 2,750.00", date: "2024-08-04", type: "Withdrawal" },
//   { accountNumber: "1234813293", amount: "KSh 6,000.00", date: "2024-08-05", type: "Deposit" },
//   { accountNumber: "1234813294", amount: "KSh 1,800.00", date: "2024-08-06", type: "Withdrawal" },
//   { accountNumber: "1234813295", amount: "KSh 7,200.00", date: "2024-08-07", type: "Deposit" },
//   { accountNumber: "1234813296", amount: "KSh 3,500.00", date: "2024-08-08", type: "Loan Payment" },
//   { accountNumber: "1234813297", amount: "KSh 8,000.00", date: "2024-08-09", type: "Deposit" },
//   { accountNumber: "1234813298", amount: "KSh 2,200.00", date: "2024-08-10", type: "Withdrawal" },
//   { accountNumber: "1234813299", amount: "KSh 4,000.00", date: "2024-08-11", type: "Loan Payment" },
//   { accountNumber: "1234813300", amount: "KSh 2,500.00", date: "2024-08-12", type: "Withdrawal" },
// ];

function TransactionsPage({ accountNumber }) {
  const [transactions, setTransactions] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const url = `http://127.0.0.1:5000/transactions/${accountNumber}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllTransactions(data.transactions); 
        setTransactions(data.transactions); 
      } catch (error) {
        setError(error);
      }
    };

    fetchTransactions();
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
      {error ? (
        <div className="text-red-500">Error fetching transactions: {error.message}</div>
      ) : (
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
      )}
    </div>
  );
}

export default TransactionsPage;