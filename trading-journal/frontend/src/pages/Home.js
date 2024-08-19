import React from 'react';
import useTypingEffect from '../hooks/useTypingeffect';
import { Link } from 'react-router-dom';
const Home = () => {
  const texts = ['Journal your ', 'Track your ', 'Analyze your '];
  const displayText = useTypingEffect(texts);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-none max-w-screen ">
      <header className="text-center md-flex sm w-screen py-16">
        <h1 className="lg:text-6xl  md:text-2xl sm:text-1xl  font-bold text-gray-800 leading-tight font-playfair">
          {displayText}
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Track your trades, analyze your performance, and improve your strategy with our comprehensive trading journal solution.
        </p>
        <Link to={'/signin'}>
        <div className="mt-8">
          
          <button className="btn bg-transparent btn-sm border-none shadow-lg hover:bg-inherit hover:scale-105 transition-transform text-green-900">
            Get Started
          </button>
        </div>
        </Link>
      </header>

      <section className="bg-none py-20 subs">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold subs text-gray-800 mb-8">Why Choose TradeScribe?</h2>
          <div className="grid subs grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            <div className="p-8 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium subs text-gray-800">Track</h3>
              <p className="mt-4 subs text-gray-600">
                Log every trade with detailed information and keep your performance on record.
              </p>
            </div>
            <div className="p-6 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium text-gray-800 subs">Analyze</h3>
              <p className="mt-4 text-gray-600 subs ">
                Use powerful tools to analyze your trades and discover patterns and insights.
              </p>
            </div>
            <div className="p-6 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium text-gray-800 subs">Improve</h3>
              <p className="mt-4 text-gray-600 subs">
                Improve your strategies by learning from past trades and refining your approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      

    
    </div>
  );
};

export default Home;
