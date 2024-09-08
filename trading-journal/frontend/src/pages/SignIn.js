import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AddIcon } from '@chakra-ui/icons';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entered");

    try {
      const response = await fetch('https://tradescribe-1.onrender.com/api/auth/login', {  // Change to login endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),  // Remove email field here
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
    <div className="relative flex items-center text-center py-10 justify-center min-h-screen bg-secondary-gradient text-primary font-playfair">
      {/* Top-Right Button */}
      <div className=' flex gap-6 top-10 right-10 absolute sm:hidden bg-none '>
        <button className="btn border-none bg-primary opacity-70 text-white hidden lg:block hover:bg-green-900">
          <Link to="/">Home</Link>
        </button>
     
      <div className="">
        <button className="btn border-none bg-primary opacity-70 text-white hidden lg:block hover:bg-primary">
          <Link to="/">About</Link>
        </button>
      </div>
      </div>

      {/* Dropdown Button for Small Screens */}
      <div className="dropdown dropdown-end t lg:hidden absolute top-10 right-10">
        <div tabIndex={0} role="button" className="btn glass text-black bg-white opacity-20 m-1"><AddIcon /></div>
        <ul tabIndex={0} className="dropdown-content menu border-green-900 bg-gray-300 opacity-20 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link to="/">Home</Link></li>
          <li><a>About</a></li>
        </ul>
      </div>

      {/* Sign-In Form */}
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-lg font-bold mb-4 text-center">Sign In</h2>

        <form>
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1 text-left">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your username"
              autoComplete='current-username'
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
            />
          </div>

          <button onClick={handleSubmit} className="btn glass w-full bg-primary text-sm hover:bg-primary-light p-1 mt-3 size-1 btn-sm text-white">
            Submit
          </button>
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
