import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthProvider, { AuthContext } from "../../Contexts/AuthProvider";
import { useContext } from "react";
const Booking = () => {
  const { _id,image, title, details, price, ratings, iframe_link } =
    useLoaderData();

    const {user} = useContext(AuthContext);

  const [roomType, setRoomType] = useState("AC");
  const [beddingType, setBeddingType] = useState("");
  const [roomNumber, setRoomNumber] = useState(1);
  const [mealType, setMealType] = useState("");
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [dateDifference, setDateDifference] = useState(1);

  // console.log(checkIn,checkOut);
  const totalAmount =
    
    (roomType === "AC"
      ? price * 0.3
      : price * 0.15 + beddingType === "Single"
      ? price * 0.1
      : price * 0.2) +
    price * 0.5 * roomNumber +
    (mealType === "Day"
      ? price * 0.1
      : mealType === "Night"
      ? price * 0.1
      : price * 0.15) +
      dateDifference * parseInt(price);

    const checkinvalue = (event) =>{
      setCheckIn(event.target.value);
      calculateDateDifference(event.target.value, checkOut);
    }
    const checkoutvalue = (event) =>{
      setCheckOut(event.target.value);
      calculateDateDifference(checkIn, event.target.value);
    }

    const calculateDateDifference = (startDate, endDate) => {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      const differenceInTime = endDateObj.getTime() - startDateObj.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setDateDifference(differenceInDays);
    };

    // console.log(dateDifference);



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
          phone: data.number,
          email: data.email,
          address: data.address,
          remarks: data.remarks,
          hotelId: _id,
          hotel:title,
          roomtype: data.roomtype,
          beddingtype: data.beddingtype,
          roomnumber: data.roomnumber,
          mealtype: data.mealtype,
          checkin: data.checkin,
          checkout: data.checkout,
          dayCount: dateDifference,
          amount: totalAmount,
          postingTime: Date().toLocaleString(),
          status: "pending",
        };

        console.log(bookings);
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
            navigate('');
          });
        // // fetch(`https://tour-travel-server-two.vercel.app/ssl-request`, {
        // //   method: "GET",
        // //   headers: {
        // //     "content-type": "application/json",
        // //   },
        // //   body: JSON.stringify(bookings),
        // // })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 py-24 md:py-30">
      <form
        className="flex flex-col md:flex-row gap-4"
        onSubmit={handleSubmit(handleAddBooking)}
      >
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-md">
            <h3 className="font-bold text-2xl ">Personal Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="my-4">
                <input
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="First Name"
                  {...register("fname")}
                  defaultValue={user?.displayName}
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
                  value={user?.email}
                  readOnly
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
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="font-bold text-2xl ">Reservation Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="my-4">
                <label htmlFor="">Room Type</label>
                <select
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  {...register("roomtype", {
                    onChange: (e) => setRoomType(e.target.value),
                  })}
                >
                  <option value="AC">AC</option>
                  <option value="NON AC">NON AC</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="">Bedding Type</label>
                <select
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  {...register("beddingtype", {
                    onChange: (event) => setBeddingType(event.target.value),
                  })}
                >
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="">Number of Room</label>
                <select
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  {...register("roomnumber", {
                    onChange: (event) => setRoomNumber(event.target.value),
                  })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="">Meal Type</label>
                <select
                  type="text"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  {...register("mealtype", {
                    onChange: (event) => setMealType(event.target.value),
                  })}
                >
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                  <option value="Day-Night">Day-Night</option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="">Check In</label>
                <input
                  type="date"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="First Name"
                  {...register("checkin", {
                    onChange: checkinvalue,
                  })}
                  value={checkIn}
                />
              </div>
              <div className="my-4">
                <label htmlFor="">Check Out</label>
                <input
                  type="date"
                  className="border-0 bg-transparent border-b-2 border-b-blue-500 w-full text-black focus:outline-none"
                  placeholder="First Name"
                  {...register("checkout", {
                    onChange: checkoutvalue,
                  })}
                  value={checkOut}
                />
              </div>
            </div>
            {/* <button
              className="w-full  bg-yellow-500 text-white py-3 px-2 my-2"
              onClick={handleSubmit}
            >
              <span>Confirm Booking</span>
            </button> */}
          </div>
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
              <span>{roomType} Room</span>
              <span>
                BDT {roomType === "AC" ? price * 0.3 : price * 0.15} TK
              </span>
            </div>
            <div className="flex justify-between">
              <span>{beddingType} Bedding</span>
              <span className="text-green-400">
                BDT {beddingType === "Single" ? price * 0.1 : price * 0.2} TK
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Room ({roomNumber})</span>
              <span>BDT {price * 0.5 * roomNumber} TK</span>
            </div>
            <div className="flex justify-between">
              <span>Meal ({mealType})</span>
              <span>
                BDT{" "}
                {mealType === "Day"
                  ? price * 0.1
                  : mealType === "Night"
                  ? price * 0.1
                  : price * 0.15}{" "}
                TK
              </span>
            </div>
            <div className="flex justify-between">
              <span>Basic Price</span>
              <span>BDT {price} TK</span>
            </div>
            <div className="flex justify-between">
              <span>Check In</span>
              <span> {checkIn} </span>
            </div>
            <div className="flex justify-between">
              <span>Check Out</span>
              <span> {checkOut} </span>
            </div>
            <div className="w-full flex justify-between bg-blue-900 text-white py-3 px-2 my-1">
              <span>Total</span>
              <span>BDT {totalAmount}</span>
            </div>
            {
              user ? 
              <button className="w-full flex justify-center bg-orange-300 text-white py-3 px-2 my-1">
              Confirm Booking
            </button> 
            :
              <Link to={'/login'} className="w-full flex justify-center bg-orange-300 text-white py-3 px-2 my-1">Please Login To Confirm</Link> 
            }

            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
