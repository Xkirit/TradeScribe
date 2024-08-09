import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-navbar-gradient text-green-900 p-4 flex items-center justify-between shadow-none border-none">
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
        <Link to="/signin">
        <button className="bg-none hover:bg-primary text-white font-bold py-1 px-3 rounded">
          Sign-in
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
