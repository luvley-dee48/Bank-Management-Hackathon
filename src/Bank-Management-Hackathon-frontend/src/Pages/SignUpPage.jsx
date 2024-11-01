import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bank_Management_Hackathon_backend } from 'declarations/Bank-Management-Hackathon-backend';

const SignUpPage = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role_name: 'auto',
    branch_name: '',
    address: '',
    account_type: '',
  });

  const [errors, setErrors] = React.useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    general: '',
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      general: '',
    };

    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
      isValid = false;
    }
    if (!formData.account_type) {
      newErrors.account_type = 'Account type is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        // Motoko backend integration will go here
        navigate('/login');
      } catch (error) {
        setErrors(prev => ({
          ...prev,
          general: 'Registration failed. Please try again.',
        }));
      }
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-lg relative">
        <div
          className="hidden md:block bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/2160961577/photo/entrepreneur-using-electronic-devices-for-store-customer-data-to-gain-customer-insight-in.jpg?s=1024x1024&w=is&k=20&c=IjMmku3J9izT2N0qLC1ObFTUuDyB7jK3xO_GnpvXj9E=")',
          }}
        ></div>

        <div className="flex flex-col items-center justify-center p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-600 hover:text-gray-800 transition"
          >
            &times;
          </button>
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create Account</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {errors.general && (
                <p className="text-red-500 text-sm text-center">{errors.general}</p>
              )}
              <div className={`form-control ${errors.username ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>
              <div className={`form-control ${errors.email ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className={`form-control ${errors.branch_name ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Branch Name"
                  type="string"
                  value={formData.branch_name}
                  onChange={(e) => setFormData({ ...formData, branch_name: e.target.value })}
                />
                {errors.branch_name && <p className="text-red-500 text-sm mt-1">{errors.branch_name}</p>}
              </div>
              <div className={`form-control ${errors.phone ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Phone Number"
                  type="string"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className={`form-control ${errors.address ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div className={`form-control ${errors.account_type ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Account Type (e.g., Savings, Checking)"
                  type="text"
                  value={formData.account_type}
                  onChange={(e) => setFormData({ ...formData, account_type: e.target.value })}
                />
                {errors.account_type && <p className="text-red-500 text-sm mt-1">{errors.account_type}</p>}
              </div>
              <div className={`form-control ${errors.role_name ? 'text-red-500' : ''}`}>
                <label className="block mb-2 text-gray-700">Role:</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  value={formData.role_name}
                  onChange={(e) => setFormData({ ...formData, role_name: e.target.value })}
                >
                  <option value="auto">Auto (Based on Email)</option>
                  <option value="manager">Manager</option>
                  <option value="teller">Teller</option>
                  <option value="customer">Customer</option>
                </select>
                {errors.role_name && <p className="text-red-500 text-sm mt-1">{errors.role_name}</p>}
              </div>
              <div className={`form-control ${errors.password ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className={`form-control ${errors.confirmPassword ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white p-3 rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-6 text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/Login" className="text-teal-500 font-semibold hover:text-teal-700">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
