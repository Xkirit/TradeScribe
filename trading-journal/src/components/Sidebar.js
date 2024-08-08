import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-primary-gradient text-white w-64 h-full fixed top-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out shadow-lg z-50 rounded-r-lg`}
    >
      <nav className="mt-10">
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary-light">
          Dashboard
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary-light">
          Trades
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary-light">
          Reports
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary-light">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
