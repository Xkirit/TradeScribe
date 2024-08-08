import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

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

  return (
    <div className="relative h-screen overflow-hidden bg-secondary-gradient font-playfair  text-primary">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`p-10 transition-opacity duration-200 ease-in-out ${
          isSidebarOpen ? 'filter blur-sm' : ''
        }`}
      >
        <h1 className="text-3xl font-bold text-primary">Welcome to the Trading Journal</h1>
        <p className="mt-4 text-secondary-lightest">Track your trades, analyze your performance, and improve your strategy.</p>
      </div>
    </div>
  );
};

export default Home;
