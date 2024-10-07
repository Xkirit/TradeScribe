import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Toaster, toast } from 'react-hot-toast';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    console.log("entered")
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) { // Check if the response is okay
        login(data.token); // Set authentication context
        navigate('/trades', { state: { loginSuccess: true } });// Redirect to trades page
        
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
        console.log(error)
        toast.error("login error")
      }
    } catch (err) {
      console.error('Error during sign-in:', err);
      setError('Error connecting to the server');
    }
  };

  return (
    <div className="relative flex items-center py-10 justify-center min-h-screen bg-secondary-gradient text-primary font-playfair">
      <div><Toaster/></div>
      <button className='absolute top-10 pr-4 text-center right-10 font-bold hover:bg-primary text-green-900 subs py-1 px-3 rounded-lg text-md btn glass'>
        <Link to="/">Home</Link>
      </button>

      <div className="dropdown dropdown-end t lg:hidden absolute top-10 right-10">
        <ul tabIndex={0} className="dropdown-content menu border-green-900 bg-gray-300 opacity-20 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>

      {/* Sign-In Form */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-lg font-bold mb-4 text-center">Sign In</h2>

        <form onSubmit={handleSubmit}> {/* Use onSubmit to handle form submission */}
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1 text-left">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your username"
              autoComplete='current-username'
              required // Add required attribute for better user experience
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium mb-1 text-left">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your password"
              autoComplete="current-password"
              required // Add required attribute for better user experience
            />
          </div>
          
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display error message */}

          <div className='py-2'>
            <button
              onClick={handleSubmit} // Change to type="submit" for better form handling
              className="w-full btn-glass bg-primary text-white py-1 rounded-lg hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-dark text-sm btn-sm glass"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <span className="text-xs">Didn't sign up yet? </span>
          <Link to="/signup" className="text-primary font-bold text-sm hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
