import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import useTypingEffect from '../hooks/useTypingeffect';
import { Outlet } from 'react-router-dom';
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const texts = ['Journal your ', 'Track your ', 'Analyze your'];
  const displayText = useTypingEffect(texts);

  return (
    <div className="relative h-screen overflow-hidden bg-secondary-gradient font-playfair  text-primary">
      <div className='absolute inset-0 bg-noise z-0'>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`p-7 transition-opacity duration-200 ease-in-out ${
          isSidebarOpen ? 'filter blur-sm' : ''
        }z-7 flex flex-col items-center py-4 h-full`}
      >
        <h1 className="text-5xl py-2 font-bold font-playfair text-primary">
          {displayText}
        </h1>
    
        <p className="mt-4 text-secondary-lightest">Track your trades, analyze your performance, and improve your strategy.</p>
      </div>
      <Outlet />
    </div>
    </div>
  );
};

export default Home;
