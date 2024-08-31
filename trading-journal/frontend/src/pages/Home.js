import React from "react";
import useTypingEffect from "../hooks/useTypingeffect";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useAuth } from "../context/AuthContext";
import { Marquee } from "@devnomic/marquee";
import Testimonials from "../components/Testimonials";
// import ParticlesBackground from "../components/ParticleBg";
const Home = () => {
  const texts = ["Journal your ", "Track your ", "Analyze your "];
  const displayText = useTypingEffect(texts);
  const {auth, logout}=useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-none max-w-screen ">
      
      <header className="text-center md-flex sm:w-screen py-16 mt-5">
        <h1 className="text-7xl top-5 font-bold md:flex-shrink text-gray-800 leading-tight font-playfair">
          {displayText}
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Track your trades, analyze your performance, and improve your strategy
          with our comprehensive trading journal solution.
        </p>
        {auth.token ? (
            <button className="btn mt-8 bg-transparent btn-sm border-none shadow-lg hover:bg-inherit hover:scale-105 transition-transform text-green-800">
              <Link to="/trades" >

              get started
              </Link>
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

      <section className="py-24 flex subs">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold subs text-gray-800 mb-8">
            Why Choose TradeScribe?
          </h2>
          <Marquee pauseOnHover={true} fade={true} >
          {/* <div className="grid subs grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-white"> */}
            <div className="p-10 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-5">
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
          {/* </div> */}
          </Marquee>
        </div>
      </section>

  

      

    </div>
  );
};

export default Home;
