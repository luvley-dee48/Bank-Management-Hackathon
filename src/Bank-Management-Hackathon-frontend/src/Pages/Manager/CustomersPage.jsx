import React, { useState ,useEffect} from 'react';

const customersData = [
  { name: "Richard Brown", email: "richard@gmail.com", phone: "0709876543", address: "123 Main St" },
  { name: "Emily Johnson", email: "emily@gmail.com", phone: "0740987653", address: "456 Elm St" },
  { name: "Daniel Garcia", email: "daniel@gmail.com", phone: "0790876311", address: "789 Oak St" },
  { name: "Isabella Davis", email: "isabella@gmail.com", phone: "0778907654", address: "321 Pine St" },
  { name: "Michael James", email: "michael@gmail.com", phone: "0767854321", address: "654 Maple St" },
  { name: "Olivia Wilson", email: "olivia@gmail.com", phone: "0790456721", address: "987 Cedar St" },
  { name: "Liam Anderson", email: "liam@gmail.com", phone: "0711246578", address: "135 Birch St" },
  { name: "Ava Davidson", email: "ava@gmail.com", phone: "0735675555", address: "246 Fir St" },
  { name: "Sophia Martinez", email: "sophia@gmail.com", phone: "0760543214", address: "357 Spruce St" },
  { name: "Noah Thompson", email: "noah@gmail.com", phone: "0790897654", address: "468 Redwood St" },
];


const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    
    fetch('http://127.0.0.1:5000/customers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch customers!');
        }
        return response.json();
      })
      .then(data => {
        setCustomers(data.customers);
        if (searchTerm) {
          const filtered = data.customers.filter(customer =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredCustomers(filtered);
        } else {
          setFilteredCustomers(data.customers);
        }
        setError('');
      })
      .catch(error => {
        setError(error.message);
        setCustomers([]);
        setFilteredCustomers([]);
      });
  }, [searchTerm]);

  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredCustomers(customers);
    } else {
      const filtered = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCustomers(filtered);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Customers</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex-1 md:mr-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 md:mt-0 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {filteredCustomers.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer List</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredCustomers.map((customer, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{customer.name}</h3>
                <p className="text-gray-600 mb-1">Email: {customer.email}</p>
                <p className="text-gray-600 mb-1">Phone Number: {customer.phone_number}</p>
                <p className="text-gray-600">Address: {customer.address}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        !error && (
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-6 text-center text-gray-600">
            <p>No customers found.</p>
          </div>
        )
      )}
    </div>
  );
};

export default CustomersPage;