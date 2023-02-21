import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotelCard = ({service}) => {
    return (
        <div className='flex gap-4 flex-col md:flex-row bg-white rounded-md p-4 my-4 '>
            <div className='w-full md:w-1/3'>
            <img src={service.image} alt="" className='w-full h-52 rounded-md'/>
            </div>
            
            <div className='w-full md:w-2/3'>
            <h5 className="text-2xl font-medium tracking-tight text-black font-">
            {service.title}
          </h5>
          <p className="font-bold text-sm text-gray-700 dark:text-gray-400">
            {service.details}
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="text-purple-500 font-medium">
              $500
            </span>
            <div className="flex items-center gap-1 px-2 rounded-sm text-pink-400">
              <FaStar></FaStar> 5
            </div>
          </div>
          <Link to={`/booking/${service.title}`} className="text-red-500 backdrop-blur-sm hover:backdrop-blur-md shadow-sm shadow-red-500  px-10 py-2 border  border-red-500 hover:bg-red-500 hover:text-white rounded duration-700">
            Book now
          </Link>
            </div>
        </div>
    );
};

export default HotelCard;