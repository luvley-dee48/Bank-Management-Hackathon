import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role_name: 'auto', // Automatically set role if email matches
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
    address: '',
    account_type: '',
    general: '',
  });

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const roleByEmail = {
    'manager.demo@example.com': 'manager',
    'customer.demo@example.com': 'customer',
    'teller.demo@example.com': 'teller',
    'admin.demo@example.com': 'admin',
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      address: '',
      account_type: '',
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
      setLoading(true); // Start loading state
      try {
        // Perform backend registration here
        // Use formData.role_name if email matches
        navigate('/login');
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          general: 'Registration failed. Please try again.',
        }));
      } finally {
        setLoading(false); // End loading state
      }
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      email,
      role_name: roleByEmail[email] || 'auto', // Set role if email matches; default to 'auto'
    }));
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
                  onChange={handleEmailChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className={`form-control ${errors.branch_name ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Branch Name"
                  value={formData.branch_name}
                  onChange={(e) => setFormData({ ...formData, branch_name: e.target.value })}
                />
                {errors.branch_name && <p className="text-red-500 text-sm mt-1">{errors.branch_name}</p>}
              </div>
              <div className={`form-control ${errors.phone ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className={`form-control ${errors.address ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div className={`form-control ${errors.account_type ? 'text-red-500' : ''}`}>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400"
                  placeholder="Account Type (e.g., Savings, Checking)"
                  value={formData.account_type}
                  onChange={(e) => setFormData({ ...formData, account_type: e.target.value })}
                />
                {errors.account_type && <p className="text-red-500 text-sm mt-1">{errors.account_type}</p>}
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
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
              <button
                type="submit"
                className={`w-full p-3 mt-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account? <Link to="/login" className="text-teal-600 hover:underline">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
