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
    
    <div className="relative min-h-screen overflow-hidden bg-secondary-gradient font-playfair  text-primary">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}
      <div className='z-7 flex flex-col items-center py-4 h-full'>
      <div
        className={`p-7 transition-opacity duration-200 ease-in-out ${
          isSidebarOpen ? 'filter blur-sm' : ''
        }`}>
        
        </div>
         <Outlet />
      </div>
     
    </div>
  );
};

export default MainLayout;
