import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import ParticlesBackground from './components/ParticleBg';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const [DarkMode, SetDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode === 'true' || false;
  });


  useEffect(() => {
    if (DarkMode) {
      SetDarkMode(true)
      document.body.classList.add('darkMode');

      // ('darkmode: on',DarkMode);
    }
    else {
      document.body.classList.remove('darkMode');
      SetDarkMode(false)
      // ("darkMode: off");

    } localStorage.setItem('mode', DarkMode);
  }, [DarkMode])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative flex-grow flex-shrink min-h-screen  font-playfair text-primary">
      <Sidebar isOpen={isSidebarOpen} className="z-20" />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-10"
          onClick={closeSidebar}
        />
      )}
      <div className={`transition-blur duration-300 ease-in-out w-full ${isSidebarOpen ? 'blur-sm' : ''}`}>
        <Navbar toggleSidebar={toggleSidebar} className="z-30" />
        <div className="flex flex-col items-center py-4 min-h-screen z-0">
          <Outlet />
        </div>
      </div>
      <Footer className="z-10" />
    </div>
  );
};

export default MainLayout;
