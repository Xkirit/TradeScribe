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
    <div className="flex flex-col items-center min-h-screen p-4 z-0">
      <header className="text-center py-16 mt-5 max-w-6xl ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-800 leading-tight">
          {displayText}
        </h1>
        <p className="mt-6 text-base sm:text-xs md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-7 w-screen">
          Track your trades, analyze your performance, and improve your strategy
          with our comprehensive trading journal solution.
        </p>
        {auth.token ? (
          <button className="btn mt-8 bg-transparent border border-green-800 text-green-800 py-2 px-4 rounded-md shadow-lg hover:bg-green-800 hover:text-white transition-colors">
            <Link to="/trades">Get Started</Link>
          </button>
        ) : (
          <button className="btn mt-8 bg-transparent btn-sm border-none shadow-lg hover:bg-inherit hover:scale-105 transition-transform text-green-800">
            <Link to="/signin">
              Get Started
            </Link>
          </button>
        )}
      </header>

      <section className="py-18 lg:py-20 flex subs bg-none">
        <div className="container mx-auto text-center bg-none">
          <h2 className="lg:text-3xl sm:text-1xl font-semibold subs text-gray-800 mb-8">
            Why Choose TradeScribe?
          </h2>
          <Marquee fade={true}>
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
              <p className="mt-4 text-gray-600 text-center subs w-96">
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
      <section class="ezy__testimonial5 flex light py-14 md:py-24 bg-none text-green-900">
        <div class="container px-4 sm:w-sm md:w-md  ">
          <div class="flex justify-center md:mb-6 sm:text-sm mx-7">
            <div class="sm:max-w-lg text-center">
              <h2 class="text-3xl leading-none md:text-[45px] sm:text-[30px] font-bold mb-4">Community Reviews</h2>
              <p>From there give dominion, lights doesn't good all rule let open, appear our beast second bearing.</p>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-6 text-center pt-12 lg:pt-6">
            <div class="col-span-6 md:col-span-3 lg:col-span-2 hover: hover:scale-105 transition-transform">
              <div class="bg-white shadow-xl bg-opacity-20 backdrop:blur-md rounded-2xl transition duration-300 h-full p-6 flex flex-col items-center justify-center text-center">
                <img
                  src="https://cdn.easyfrontend.com/pictures/users/user17.jpg"
                  alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Akshay Kumar</h4>
                  <p class="mb-6">
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star-half-alt text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-200 dark:text-opacity-20"></span>
                  </p>
                  <p class="opacity-50 mb-0 font-bold font-mono justify-center text-center max-w-sm items-center">
                    Two multiply fly them, made under a make replenish behold stars, is he of beast place also under unto
                    it.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white shadow-xl bg-opacity-20 backdrop:blur-md rounded-2xl  duration-300 h-full p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform">
                <img
                  src="https://cdn.easyfrontend.com/pictures/users/user8.jpg"
                  alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Raima Ray</h4>
                  <p class="mb-6">
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star-half-alt text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-200 dark:text-opacity-20"></span>
                  </p>
                  <p class="opacity-50 mb-0 font-bold font-mono text-center break-words overflow-wrap break-word max-w-sm">
                    Shall deep bearing divide seed moved replenish us, good our open he seed day which firmament creeping
                    wherein fourth fly.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="bg-white hover: hover:scale-105 transition-transform shadow-xl bg-opacity-20 backdrop:blur-md rounded-2xl  duration-300 h-full p-6 flex flex-col items-center justify-center text-center">
                <img
                  src="https://cdn.easyfrontend.com/pictures/users/user18.jpg"
                  alt=""
                  class="max-w-full h-auto rounded-full mx-auto"
                  width="120"
                />
                <div class="mt-4">
                  <h4 class="text-2xl font-medium mb-1">Arjun Kapur</h4>
                  <p class="mb-6">
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-500"></span>
                    <span class="fas fa-star-half-alt text-yellow-500"></span>
                    <span class="fas fa-star text-yellow-200 dark:text-opacity-20"></span>
                  </p>
                  <p class="opacity-50 mb-0 font-bold font-mono text-center break-words overflow-wrap break-word max-w-sm">
                    It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section >

      <div className="bg-white w-screen h-full"></div>
    </div >
  );
};

export default Home;
