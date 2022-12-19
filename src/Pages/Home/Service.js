import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`service.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {
        services.map( service => <div key={service._id} className="w-full rounded-md shadow-md flex flex-col pb-4">
        <div>
          <img
            src={service.image}
            alt=""
            className="rounded-t-md h-64 w-full object-cover"
          />
        </div>
        <div className="px-4 pt-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {service.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {service.details.slice(0, 100)}
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            <span className="text-white font-medium">
              ${service.price}
            </span>
            <div className="flex items-center gap-1 px-2 bg-teal-400 rounded-sm text-white">
              <FaStar></FaStar> {service.ratings}
            </div>
          </div>
          <Link to={`#`}>
            <button className="bg-red-500 text-white px-3 py-2">View Details</button>
          </Link>
        </div>
      </div>)
      }
    </div>
  );
};

export default Service;
