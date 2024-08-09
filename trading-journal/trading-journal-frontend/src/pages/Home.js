import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import useTypingEffect from '../hooks/useTypingeffect';

const Home = () => {

  const texts = ['Journal your ', 'Track your ', 'Analyze your'];
  const displayText = useTypingEffect(texts);

  return (
      <div className='z-7 flex flex-col items-center py-4 h-full'>
        <h1 className="text-5xl font-bold font-playfair text-primary ">
          {displayText}
        </h1>
        <p className="mt-4 text-secondary-lightest">
          Track your trades, analyze your performance, and improve your strategy.
        </p>
        </div>
      
     
  );
};

export default Home;
