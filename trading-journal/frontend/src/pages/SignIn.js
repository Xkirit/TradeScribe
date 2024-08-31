import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {  // Change to login endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),  // Remove email field here
      });

      const data = await response.json();
      if (data.token) {
        login(data.token); // Set authentication context
        navigate('/trades'); // Redirect to trades page
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (err) {
      console.error('Error during sign-in:', err);
    }
  };

  return (
    <div className="relative flex items-center py-10 justify-center min-h-screen bg-secondary-gradient text-primary font-playfair">
      <button className='absolute top-10 pr-6 text-center right-10 font-bold bg-none hover:bg-primary text-white py-1 px-3 rounded-lg text-md'>
      <Link
        to="/"
      >
        Home
      </Link>
      </button>

      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-lg font-bold mb-4 text-center">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1">Username</label>
            <input
              type="text"  // Change to text
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your username"
              autoComplete='current-username'
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          
          <div className='py-2'>
            <button
              type="submit"
              className="w-full bg-primary text-white py-1 rounded-lg hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-dark text-sm"
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
