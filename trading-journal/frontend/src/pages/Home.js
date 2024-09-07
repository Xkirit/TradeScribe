import React from "react";
import useTypingEffect from "../hooks/useTypingeffect";
import { Link } from "react-router-dom";
import { Marquee } from "@devnomic/marquee";
import { useAuth } from "../context/AuthContext";
import "@devnomic/marquee/dist/index.css";
const Home = () => {
  const texts = ["Journal your ", "Track your ", "Analyze your "];
  const displayText = useTypingEffect(texts);
  const { auth } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-none p-4">
      <header className="text-center py-16 mt-5 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-800 leading-tight">
          {displayText}
        </h1>
        <p className="mt-6 text-base sm:text-xs md:text-xl text-gray-600 max-w-3xl mx-7 w-screen">
          Track your trades, analyze your performance, and improve your strategy
          with our comprehensive trading journal solution.
        </p>
        {auth.token ? (
          <button className="btn mt-8 bg-transparent border border-green-800 text-green-800 py-2 px-4 rounded-md shadow-lg hover:bg-green-800 hover:text-white transition-colors">
            <Link to="/trades">Get Started</Link>
          </button>
        ) : (
          <button className="btn mt-8 bg-transparent btn-sm border-none shadow-lg hover:bg-inherit hover:scale-105 transition-transform text-green-800">
            <Link 
              to="/signin" 
              
            >
              get started
            </Link>
            </button>
        )}
      </header>

      <section className="py-18 lg:py-20 flex subs">
        <div className="container mx-auto text-center">
          <h2 className="lg:text-3xl sm:text-2xl  font-semibold subs  text-gray-800 mb-8">
            Why Choose TradeScribe?
          </h2>
          <Marquee fade={true} >
            {/* <div className="grid subs grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-white"> */}
            <div className="p-8 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-5">
              <h3 className="text-xl font-medium subs text-gray-800">Track</h3>
              <p className="mt-4 subs text-gray-600 text-center w-96">
                Log every trade with detailed information and keep your
                performance on record.
              </p>
            </div>
            <div className="p-10 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-5">
              <h3 className="text-xl font-medium text-gray-800 subs">
                Analyze
              </h3>
              <p className="mt-4 text-gray-600 text-center subs w-96 ">
                Use powerful tools to analyze your trades and discover patterns
                and insights.
              </p>
            </div>
            <div className="p-10 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-5">
              <h3 className="text-xl font-medium text-gray-800 subs">
                Improve
              </h3>
              <p className="mt-4 text-gray-600 subs text-center w-96">
                Improve your strategies by learning from past trades and
                refining your approach.
              </p>
            </div>
            
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Home;
