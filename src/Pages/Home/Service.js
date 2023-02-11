import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ServiceCard from "./ServiceCard";
import "./Home.css";
import { FaSearch, FaSearchLocation } from "react-icons/fa";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const searchHotel = (data) => {
    const hotelData = {
      name: data.name,
      money: data.money,
    };
    setLoading(true);
    fetch(
      `https://tour-travel-server-two.vercel.app/hotels/search?name=${data.name}&money=${data.money}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
    reset();
  };
  useEffect(() => {
    setLoading(true);
    fetch(`https://tour-travel-server-two.vercel.app/hotels`)
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
  }, [setServices]);

  //   const { data: servicesData = services, refetch, isLoading } = useQuery({
  //     queryKey: ['services'],
  //     queryFn: async () => {
  //         const res = await fetch(`https://tour-travel-server-two.vercel.app/hotels`);
  //         const data = await res.json();
  //         return data
  //     }
  // });
  if(loading){
    return <h6>Loading...</h6>
  }

  return (
    <div className="-mt-10">
      <form
        onSubmit={handleSubmit(searchHotel)}
        className="flex flex-col  md:flex-row backdrop-blur-sm bg-white/30 text-white w-1/2 mx-auto py-3 rounded-md  items-center justify-center"
      >
        <div className="text-left px-2 my-2">
          <input
            type="text"
            {...register("name")}
            placeholder="City/Hotel/Resort/Area"
            className="bg-white border-2 border-white w-full text-black focus:outline-none rounded-md py-2 text-xs pl-2"
          />
        </div>
        <div className="text-left px-2 my-2">
          <input
            type="number"
            {...register("money")}
            placeholder="Budget"
            className="bg-white border-2 border-white w-full text-black focus:outline-none rounded-md py-2 text-xs pl-2"
          />
        </div>
        <div className="text-left px-2 my-2">
          <button
            type="submit"
            className="text-white bg-red-500 font-[Poppins] duration-500 px-6 py-2 hover:bg-red-500 hover:text-white rounded"
          >
            <FaSearch></FaSearch>
          </button>
        </div>
      </form>

      {loading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-5">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service}></ServiceCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;
