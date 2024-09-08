import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AddIcon } from '@chakra-ui/icons';

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
    <nav className="navbar fixed z-10 backdrop-blur-md w-full text-green-900 p-5 py-1 flex items-center justify-between shadow-sm border-none">
      {/* Logo and hamburger menu */}
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
        <div
          style={{ fontWeight: 950 }}
          className="text-xl sm:text-lg lg:text-2xl font-extrabold font-playfair italic"
        >
          TradeScribe
        </div>
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden md:flex items-center space-x-5 ml-auto">
        <Link to="/">
          <button className="navbar bg-none hover:bg-primary font-bold py-1 px-3 rounded">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="navbar bg-none hover:bg-primary font-bold py-1 px-3 rounded">
            About
          </button>
        </Link>
        {auth.token ? (
          <button
            onClick={handleLogout}
            className="text-red-400 hover:bg-primary bg-none font-bold px-3 rounded"
          >
            Signout
          </button>
        ) : (
          <Link to="/signin">
            <button className="navbar bg-none hover:bg-primary font-bold px-3 rounded">
              SignIn
            </button>
          </Link>
        )}
      </div>

      {/* Dropdown menu for small screens */}
      {/* <div className="lg:hidden md:hidden sm:flex items-center">
        <button
          onClick={toggleDropdown}
          className="text-green-900 subs focus:outline-none"
        >
          <SmallAddIcon size={30} />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 right-4 bg-none backdrop:blur-md subs text-green-900 shadow-lg rounded-lg py-2 w-40">
            <Link to="/" className="block px-4 py-2 hover:bg-primary">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-primary">
              About
            </Link>
            {auth.token ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-primary text-red-400"
              >
                Signout
              </button>
            ) : (
              <Link to="/signin" className="block px-4 py-2 hover:bg-primary">
                SignIn
              </Link>
            )}
          </div>
        )}
      </div> */}

      <div className="dropdown dropdown-bottom dropdown-end lg:hidden md:hidden backdrop-blur-md z-10">
        <div tabIndex={0} role="button" className="btn glass bg-transparent text-green-900 border-none size-10 shadow-none"><AddIcon/></div>
        <ul tabIndex={0} className="dropdown-content menu bg-white bg-opacity-30 backdrop-blur-lg rounded-box z-20 w-52 p-2 shadow">
          <li><a><Link to="/">Home</Link></a></li>
          <li><a><Link to="/About">About</Link></a></li>
          <li><a>

          {auth.token ? (
          <button
            onClick={handleLogout}
            className="text-red-400 hover:bg-primary bg-none font-bold px-3 rounded"
          >
            Signout
          </button>
        ) : (
          <Link to="/signin">
            Sign in
          </Link>
        )}
            
            
            </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
