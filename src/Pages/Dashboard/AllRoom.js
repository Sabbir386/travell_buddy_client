import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllRoom = () => {
    const [rooms, setrooms] = useState([]);
    useEffect(() => {
        fetch(`https://tour-travel-server-two.vercel.app/rooms`, {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setrooms(data);
          });
      }, []);
    return (
        <div className="w-full py-24 md:py-30">
      <div className="bg-white rounded-md px-3 py-4">
        <h3 className="text-violet-800">All Hotels</h3>
        <table className=" bg-white w-full">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">#</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Room Type</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Bed Type</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Image</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Price</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {
                rooms.map((room,idx) => <tr key={idx}>
                <td className="border px-8 py-4">{idx+1}</td>
                <td className="border px-8 py-4">{room.roomType}</td>
                <td className="border px-8 py-4">{room.beddingType}</td>
                <td className="border px-8 py-4"><img src={room.image} alt="" className="w-24 h-16"/></td>
                <td className="border px-8 py-4">{room.roomPrice} TK</td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllRoom;