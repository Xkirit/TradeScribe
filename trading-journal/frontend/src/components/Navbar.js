import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BsMenuButton } from 'react-icons/bs';

const Navbar = ({ toggleSidebar }) => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar fixed z-10 backdrop-blur-md mx-auto w-full text-green-900 p-5 py-1 flex items-center justify-between shadow-sm">
      {/* Left Section: Hamburger Menu and Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from closing the sidebar
            toggleSidebar();
          }}
          className="text-white focus:outline-none"
        >
          <RxHamburgerMenu size={24} />
        </button>
        <Link to={'/'}>
          <div className="text-2xl font-extrabold font-playfair italic">
            TradeScribe
          </div>
        </Link>
      </div>

      {/* Middle Section: Links for larger screens */}
      <div className="hidden md:flex space-x-5 font-poppins">
        <Link to="/">
          <button className="hover:bg-primary font-bold px-3 rounded">Home</button>
        </Link>
        <Link to="/About">
          <button className="hover:bg-primary font-bold px-3 rounded">About</button>
        </Link>
        {auth.token ? (
          <button
            onClick={handleLogout}
            className="text-red-400 hover:bg-primary font-bold px-3 rounded"
          >
            Signout
          </button>
        ) : (
          <Link to="/signin">
            <button className="hover:bg-primary font-bold px-3 rounded">
              Sign in
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Dropdown for smaller screens */}
      <div className="md:hidden">
        <button
          className="text-green-900 focus:outline-none btn glass"
          onClick={toggleDropdown}
        >
          <BsMenuButton size={24} />
        </button>

        {isDropdownOpen && (
          <ul className="dropdown-content absolute right-5 mt-2 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-md p-3">
            <li className="py-2">
              <Link to="/" className="hover:bg-primary rounded px-2 block">Home</Link>
            </li>
            <li className="py-2">
              <Link to="/About" className="hover:bg-primary rounded px-2 block">About</Link>
            </li>
            <li className="py-2">
              {auth.token ? (
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:bg-primary rounded px-2 block"
                >
                  Signout
                </button>
              ) : (
                <Link to="/signin" className="hover:bg-primary rounded px-2 block">
                  Sign in
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
