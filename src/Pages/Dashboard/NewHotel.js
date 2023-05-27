import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const NewHotel = () => {
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
                title: data.title,
                image: data.image,
                details: data.details,
                ratings: data.ratings,
                price: data.price,
                iframe_link: data.iframe_link,
                userId:''
                
              };
              fetch("http://localhost:5000/hotels", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(hotels),
              })
                .then((res) => res.json())
                .then((result) => {
                  toast.success(
                    "Your Hotel added Succesfully !"
                  );
                  reset();
                });
    
    
    
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      };
  return (
    <div className="w-full md:w-3/5 py-24 md:py-30">
      <h3 className="text-3xl text-violet-800">Add a new Hotel</h3>
      <form className="bg-white rounded-md py-4 px-6 text-sm" onSubmit={handleSubmit(handleAddBooking)}>
        
        <div className="grid grid-cols-1 md:grid-cols2">
          <div className="text-left px-2 my-2">
            <label className="text-gray-400"> Title </label> <br />
            <input
            {...register("title", {
                            required: "Title is required",
                          })}
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
          <div className="text-left px-2 my-2">
            <label className="text-gray-400"> Details </label> <br />
            <input
            {...register("details", {
                required: "Details is required",
              })}
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
          <div className="text-left px-2 my-2">
            <label className="text-gray-400"> Price </label> <br />
            <input
            {...register("price", {
                required: "Price is required",
              })}
              type="number"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
          <div className="text-left px-2 my-2">
            <label className="text-gray-400"> Rating </label> <br />
            <input
            {...register("ratings", {
                required: "Rating is required",
              })}
              type="number"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
          <div className="text-left px-2 my-2">
            <label className="text-gray-400"> Image Link </label> <br />
            <input
            {...register("image", {
                required: "Image Link is required",
              })}
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
          <div className="text-left px-2 my-2">
            <label className="text-gray-400"> Location Link </label> <br />
            <input
            {...register("iframe_link", {
                required: "Location Link is required",
              })}
              type="text"
              className="bg-white border-1 px-4 py-2 shadow-md rounded-md border-white w-full text-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-violet-800 px-4 py-2 rounded-md text-white drop-shadow-lg w-full mt-2"
        >
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default NewHotel;
