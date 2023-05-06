import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Booking = () => {
  const { image, title, details, price, ratings, iframe_link } =
    useLoaderData();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    const navigate = useNavigate();

    const handleAddBooking = (data) => {
      Swal.fire({
        title: "Do you want to save the changes?",
        text: `Firstname: ${data.fname}<=>
        Last name: ${data.lname}<=>
        Phone: ${data.phone}<=>
        Email: ${data.email}<=>
        Address: ${data.address}<=>
        Remarks: ${data.remarks}<=>`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
                const bookings = {
                  fname: data.fname,
                  lname: data.lname,
                  phone: data.phone,
                  email: data.email,
                  address: data.address,
                  remarks: data.remarks,
                  amount: 6600,
                  postingTime: Date().toLocaleString(),
                  status: "pending",
                };
                fetch("https://tour-travel-server-two.vercel.app/bookings", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(bookings),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    Swal.fire("Saved!", "", "success");
                    toast.success(
                      "Your Booking data Submitted Successfully !"
                    );
                    reset();
                    navigate("/hotels");
                  });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    };

  return (
    <div className="max-w-[1440px] mx-auto px-5 py-24 md:py-30">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <form className="bg-white p-4 rounded-md" onSubmit={handleSubmit(handleAddBooking)}>
            <h3 className="font-bold text-2xl ">Personal Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="my-4">
                <input
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="First Name"
                  {...register("fname")}
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="Last Name"
                  {...register("lname")}
                />
              </div>
              <div className="my-4">
                <input
                  type="number"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="Phone"
                  {...register("number")}
                />
              </div>
              <div className="my-4">
                <input
                  type="email"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
              <div className="my-4">
                <textarea
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="Address"
                  {...register("address")}
                ></textarea>
              </div>
              <div className="my-4">
                <textarea
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="Reamrks"
                  {...register("remarks")}
                ></textarea>
              </div>
            </div>
            {/* <button
              className="w-full  bg-yellow-500 text-white py-3 px-2 my-2"
              onClick={handleSubmit}
            >
              <span>Confirm Booking</span>
            </button> */}
          </form>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 rounded-md">
            <div className="flex gap-2">
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-24 h-32 object-cover rounded-md"
                />
              </div>

              <div>
                <h6 className="text-sm font-bold text-purple-600">Hotels</h6>
                <h3>{title}</h3>
                <iframe
                  src={iframe_link}
                  className="w-full h-20"
                  title={title}
                ></iframe>
              </div>
            </div>
            <h3 className="my-2 text-black/50">
              Deluxe Twin without Balcony (2 Adults )
            </h3>
            <div className="flex justify-between">
              <span>Rack Rate</span>
              <span>BDT 7,906</span>
            </div>
            <div className="flex justify-between">
              <span>Hotel Offer</span>
              <span className="text-green-400">BDT 2,688</span>
            </div>
            <div className="flex justify-between">
              <span>Room Rate</span>
              <span>BDT 5,218</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & Fees</span>
              <span>BDT 1,382</span>
            </div>
            <a
              className="w-full flex justify-between bg-blue-900 text-white py-3 px-2 my-1"
              href='https://tour-travel-server-two.vercel.app/ssl-request'
            >
              <span>Total</span>
              <span>BDT 6,600</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
