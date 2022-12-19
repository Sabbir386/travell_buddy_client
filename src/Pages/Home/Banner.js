import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <section className="md:flex md:justify-between md:py-36">
          <div className="w-1/2">
            <p className="text-red-500 mb-6">Welcome to travel Buddy</p>
            <h1 className="text-white text-4xl font-extrabold mb-10">
            <Typewriter
  options={{
    strings: ['Hotel', 'Tour','Solutions'],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <Link to={'/contact'}>
              <button className="bg-white text-red-500 font-[Poppins] duration-500 px-6 py-2 hover:bg-red-500 hover:text-white rounded">
                Contact Now
              </button>
            </Link>
          </div>
          <div className="text-center w-1/2">
            <iframe
              title="Lottie Animation"
              className="inline-block w-60 h-60"
              src="https://embed.lottiefiles.com/animation/2523"
            ></iframe>

          </div>
        </section>
    );
};

export default Banner;