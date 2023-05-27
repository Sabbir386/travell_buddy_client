import React from 'react';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    return (
        <div key={service._id} className="w-full  flex flex-col" data-aos="flip-up">
        <div>
          <img
            src={service.image}
            alt=""
            className="rounded-t-md h-60 w-full object-cover rounded-md"
          />
        </div>
        <div className="px-4 py-4 mt-3 shadow-md rounded-md backdrop-blur-md bg-white border border-violet-800">
          <h5 className="text-2xl font-medium tracking-tight text-black font-">
            {service.title}
          </h5>
          <p className="font-bold text-sm text-gray-700 dark:text-gray-400">
            {service.details.slice(0, 70)}
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="text-violet-800 font-medium">
              ${service.price}
            </span>
            <div className="flex items-center gap-1 px-2 rounded-sm text-pink-400">
              <FaStar></FaStar> {service.ratings}
            </div>
          </div>
          <Link to={`/hotels/${service._id}`} className="text-violet-800 backdrop-blur-sm hover:backdrop-blur-md shadow-sm shadow-violet-500  px-10 py-2 border  border-violet-800 hover:bg-violet-800 hover:text-white rounded duration-700">
            View Details
          </Link>
        </div>
      </div>
    );
};

export default ServiceCard;