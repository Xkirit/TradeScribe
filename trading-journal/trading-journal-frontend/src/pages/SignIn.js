import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="relative flex items-center py-10 justify-center min-h-screen bg-secondary-gradient text-primary font-playfair">
      
      <Link
        to="/"
        className="absolute top-1 right-3 bg-none hover:bg-primary text-white py-1 px-3 rounded-lg text-sm"
      >
        Home
      </Link>

      <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-lg font-bold mb-4">Sign In</h2>

        <form>
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-2 py-1 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm text-sm"
              placeholder="Enter your password"
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
