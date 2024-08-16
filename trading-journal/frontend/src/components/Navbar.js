import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ toggleSidebar }) => {
  const {auth, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout= ()=>{
    logout();
    navigate('/signin');
  }
  return (
    <nav className="fixed z-10 backdrop-blur-lg w-screen text-green-900 p-5 py-3 flex items-center justify-between shadow-sm border-none">
      <div className="flex items-center space-x-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from closing the sidebar
            toggleSidebar();
          }}
          className="text-white focus:outline-none"
        >
          <RxHamburgerMenu size={24} />
        </button>
        <div style={{ fontWeight: 950}} className="text-2xl font-extrabold font-playfair italic">TradeScribe</div>
      </div>
      <div className="space-x-4">
        <Link to='/'>
        <button className="bg-none hover:bg-primary text-white font-bold py-1 px-3 rounded">
          Home 
        </button>
        </Link>
        <button className="bg-none hover:bg-primary text-white font-bold py-1 px-3 rounded">
          About
        </button>
        {auth.token ? (
            <button 
              onClick={handleLogout} 
              className=" text-primary px-4 py-2 rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <Link 
              to="/signin" 
              className=" text-primary px-4 py-2 rounded-lg"
            >
              Sign In
            </Link>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
