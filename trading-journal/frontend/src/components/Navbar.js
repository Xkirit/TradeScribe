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
    <nav className=" navbar fixed z-10 backdrop-blur-md w-screen sm:w-screen text-green-900 p-5 py-1 flex items-center justify-between shadow-sm border-none">
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
        <div style={{ fontWeight: 950}} className="lg:text-2xl sm:text-sm font-extrabold font-playfair italic">TradeScribe</div>
      </div>
      <div className="space-x-5">
        <Link to='/'>
        <button className="navbar bg-none hover:bg-primary  font-bold py-1 px-3 rounded">
          Home 
        </button>
        </Link>
        <button className="navbar bg-none hover:bg-primary  font-bold py-1 px-3 rounded">
          About
        </button>
        {auth.token ? (
            <button 
              onClick={handleLogout} 
              className=" text-red-400 hover:bg-primary bg-none font-bold  px-3  rounded "
            >
              Signout
            </button>
          ) : (
            <button className="navbar bg-none hover:bg-primary  font-bold  px-3 rounded">
            <Link 
              to="/signin" 
              
            >
              SignIn
            </Link>
            </button>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
