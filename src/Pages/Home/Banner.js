import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import BannerBack from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section
      className={`md:flex md:justify-between py-24 md:py-60 bg-[url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg')] bg-no-repeat bg-center bg-cover	  px-5`}
    >
      <div className="w-1/2 mx-auto text-center">
        <div className="text-red-500 font-bold">
          <Typewriter
            options={{
              strings: ["Welcome to", "Travel Buddy"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h1 className="text-white text-6xl font-extrabold mb-10 font-calistoga">
          Your Journey <br /> Begins Here
        </h1>
        <Link
          to={"/contact"}
          className="inline-block text-white backdrop-blur-sm hover:backdrop-blur-md shadow-sm shadow-red-500  px-10 py-2 border  border-red-500 hover:bg-red-500 hover:text-white rounded duration-700"
        >
          <span className="flex items-center gap-3">
            <span>Explore Now</span> <FaArrowRight></FaArrowRight>
          </span>
        </Link>
      </div>
      {/* <div className="text-center w-1/2">
            <iframe
              title="Lottie Animation"
              className="inline-block w-60 h-60"
              src="https://embed.lottiefiles.com/animation/2523"
            ></iframe>

          </div> */}
    </section>
  );
};

export default Banner;
