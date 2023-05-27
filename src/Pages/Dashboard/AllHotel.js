import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AllHotel = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/hotels`, {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setHotels(data);
          });
      }, []);
      
  return (
    <div className="w-full py-24 md:py-30">
      <div className="bg-white rounded-md px-3 py-4">
        <h3 className="text-violet-800">All Hotels</h3>
        <table className=" bg-white w-full">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Details
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">Image</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Price</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Rating</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {
                hotels.map((hotel,idx) => <tr key={idx}>
                <td className="border px-8 py-4">{hotel.title}</td>
                <td className="border px-8 py-4">{hotel.details}</td>
                <td className="border px-8 py-4"><img src={hotel.image} alt="" className="w-24 h-16"/></td>
                <td className="border px-8 py-4">{hotel.price} TK</td>
                <td className="border px-8 py-4">{hotel.ratings} </td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHotel;
