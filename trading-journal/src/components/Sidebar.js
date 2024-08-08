import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-primary-gradient text-white w-64 h-full fixed top-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out shadow-lg z-50 rounded-r-lg`}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
    >
      <nav className="mt-10">
        <Link to="/Dashboard" className="block py-4 px-12  rounded transition duration-200 hover:bg-secondary-light ">
          Dashboard
        </Link>
        <Link to="/Trades" className="block py-5 px-12 rounded transition duration-200 hover:bg-secondary-light">
          Trades
        </Link>
        <Link to="/Analysis" className="block py-5 px-12 rounded transition duration-200 hover:bg-secondary-light">
          Analysis
        </Link>
        <Link to="/Settings" className="block py-5 px-12 rounded transition duration-200 hover:bg-secondary-light">
          Settings
        </Link>
        <Link to="/Help" className="block py-5 px-12 rounded transition duration-200 hover:bg-secondary-light">
          Help
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
