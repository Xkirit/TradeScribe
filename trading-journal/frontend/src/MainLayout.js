import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative flex-grow min-h-screen py-2  bg-secondary-gradient font-playfair text-primary">
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`transition-blur duration-300 ease-in-out w-full ${isSidebarOpen ? 'blur-sm' : ''
          }`}>
        {/* Wrap both Navbar and main content inside the blurred container */}
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-col items-center py-4 min-h-screen">
          <Outlet />
        </div>
      </div>
      
    </div>
  );
};

export default MainLayout;
