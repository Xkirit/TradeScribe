import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-primary-gradient text-white p-4 flex items-center justify-between shadow-md">
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
        <div className="text-xl font-bold">Trading Journal</div>
      </div>
      <div className="space-x-4">
        <button className="bg-primary-light hover:bg-primary text-white font-bold py-2 px-4 rounded">
          Home
        </button>
        <button className="bg-primary-light hover:bg-primary text-white font-bold py-2 px-4 rounded">
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
