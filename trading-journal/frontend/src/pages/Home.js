import React from 'react';
import useTypingEffect from '../hooks/useTypingeffect';

const Home = () => {
  const texts = ['Journal your ', 'Track your ', 'Analyze your '];
  const displayText = useTypingEffect(texts);

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-none ">
      <header className="text-center py-16">
        <h1 className="text-6xl font-bold text-gray-800 leading-tight font-playfair">
          {displayText}
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Track your trades, analyze your performance, and improve your strategy with our comprehensive trading journal solution.
        </p>
        <div className="mt-8">
          <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </header>

      <section className="bg-none py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose TradeScribe?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium text-gray-800">Track</h3>
              <p className="mt-4 text-gray-600">
                Log every trade with detailed information and keep your performance on record.
              </p>
            </div>
            <div className="p-6 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium text-gray-800">Analyze</h3>
              <p className="mt-4 text-gray-600">
                Use powerful tools to analyze your trades and discover patterns and insights.
              </p>
            </div>
            <div className="p-6 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-medium text-gray-800">Improve</h3>
              <p className="mt-4 text-gray-600">
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
