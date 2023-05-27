import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const NewRoom = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch(`https://tour-travel-server-two.vercel.app/hotels`, {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleAddBooking = (data) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const hotels = {
          hotelId: data.hotelId,
          roomType: data.roomtype,
          beddingType: data.beddingtype,
          image: data.image,
          roomPrice: data.price,
        };
        fetch("https://tour-travel-server-two.vercel.app/rooms", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(hotels),
        })
          .then((res) => res.json())
          .then((result) => {
            toast.success("Your Room added Successfully !");
            reset();
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="w-full md:w-3/5 py-24 md:py-30">
      <h3 className="text-3xl text-violet-800">Add a new Room</h3>
      <form
        className="bg-white rounded-md py-4 px-6 text-sm"
        onSubmit={handleSubmit(handleAddBooking)}
      >
        
        <div className="grid grid-cols-1 md:grid-cols2">
          <div className="text-left my-4">
            <label className="text-gray-400"> Hotel </label> <br />
            <select
              {...register("hotelId", {
                required: "Title is required",
              })}
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            >
              {hotels.map((hotel, idx) => (
                <option key={idx} value={hotel._id}>
                  {hotel.title}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label className="text-gray-400">Room Type</label>
            <select
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
              {...register("roomtype")}
            >
              <option value="AC">AC</option>
              <option value="NON AC">NON AC</option>
            </select>
          </div>
          <div className="my-4">
            <label className="text-gray-400">Bedding Type</label>
            <select
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
              {...register("beddingtype")}
            >
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </select>
          </div>
          <div className="text-left my-4">
            <label className="text-gray-400"> Image Link </label> <br />
            <input
            {...register("image", {
                required: "Image Link is required",
              })}
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
          <div className="my-4">
            <label className="text-gray-400">Price</label>
            <input
              type="number"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
              {...register("price")}
            />
              
            
          </div>
        </div>
        <button
          type="submit"
          className="bg-violet-800 px-4 py-2 rounded-md text-white drop-shadow-lg w-full mt-2"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default NewRoom;
