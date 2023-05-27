import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const HotelDetails = () => {
    const {_id,image,title,details,price,ratings,iframe_link} = useLoaderData();
    // console.log(userData);
    return (
        <div className='px-5'>
            <div className='flex flex-col md:flex-row py-24 md:py-30'>
                <div className='w-full md:w-1/2'>
                    <img src={image} alt="" className='w-full h-80 object-cover'/>
                </div>
                <div className='w-full md:w-1/2 px-2'>
                    <p className='flex gap-2 items-center text-violet-800'> <FaStar></FaStar> {ratings} </p>
                    <h3 className='text-violet-600 text-3xl font-semibold'>{title}</h3>
                    <iframe src={iframe_link}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Map' className='w-full h-40'></iframe>
                    <p className='text-sm text-gray-500'>
                        {details}
                    </p>
                    <Link to={`/booking/${_id}`} className= "inline-block text-violet-800 backdrop-blur-sm hover:backdrop-blur-md shadow-sm shadow-violet-500  px-10 py-2 border  border-violet-800 hover:bg-violet-800 hover:text-white rounded duration-700">
            Book Now
          </Link>
                </div>
            </div>
            
        </div>
    );
};

export default HotelDetails;