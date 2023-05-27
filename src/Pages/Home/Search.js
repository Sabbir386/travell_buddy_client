import React from "react";
import { useForm } from "react-hook-form";

const Search = () => {
    const { register, handleSubmit, formState: { errors },reset  } = useForm();

    const searchHotel = data =>{
         const hotelData = {
            name: data.name,
            money: data.money
         }

         fetch(`http://localhost:5000/hotels/search?name=${data.name}&money=${data.money}`)
         .then(res => res.json())
         .then(data => console.log(data))
         reset();
    }
  return (
    <form onSubmit={handleSubmit(searchHotel)} className="flex flex-col  md:flex-row  bg-white text-white w-1/2 mx-auto py-3 rounded-md  items-center justify-center">
      <div className="text-left px-2 my-2">
        <input
          type="text"
          {...register('name')}
          placeholder="City/Hotel/Resort/Area"
          className="bg-transparent border-2 border-red-500 w-full text-black focus:outline-none rounded-md py-3 text-xs pl-2"
        />
      </div>
      <div className="text-left px-2 my-2">
        <input
          type="number"
          {...register('money')}
          
          placeholder="Budget"
          className="bg-transparent border-2 border-red-500 w-full text-black focus:outline-none rounded-md py-3 text-xs pl-2"
        />
      </div>
      <div className="text-left px-2 my-2">
        <button type="submit" className="bg-white border-2 border-red-500 text-red-500 font-[Poppins] duration-500 px-6 py-2 hover:bg-red-500 hover:text-white rounded">Search</button>
      </div>
    </form>
  );
};

export default Search;
