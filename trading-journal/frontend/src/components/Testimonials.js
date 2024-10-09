import React from 'react'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
function Testimonials() {
  return (
    <section class="ezy__testimonial5 flex light py-20 md:py-24 bg-none text-green-900">
        <div class="container px-4 sm:w-sm md:w-md  ">
          <div class="flex justify-center md:mb-6 sm:text-sm mx-7">
            <div class="sm:max-w-lg text-center">
              <h2 class="text-[25px] leading-none md:text-2xl subs lg:text-3xl font-mono font-semibold mb-2">Community Reviews</h2>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-6 text-center pt-12 lg:pt-6 font-poppins">
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
            <div class="col-span-6 md:col-span-3 lg:col-span-2 hover: hover:scale-105 transition-transform">
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
  )
}

export default Testimonials
