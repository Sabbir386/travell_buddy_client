import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { motion } from "framer-motion";
import useAdmin from "../../hooks/useAdmin";
const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const [infos, setInfos] = useState([]);
  const [loading,setLoading] = useState(false);
  // console.log(user)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/informations/${user.email}`)
      .then((res) => res.json())
      .then((data) => setInfos(data));
      setLoading(false)
  }, [user]);
  const data = [...infos];
  // console.log(data);
  return (
    <div className="py-24 md:py-30">
      <motion.div className="w-full overflow-auto">
        <h3 className="text-3xl text-violet-800">All Bookings</h3>
        <table className="table w-full border-separate border-violet-800 border-spacing-6 bg-white">
          <thead>
            <tr className="bg-white border border-white text-left text-violet-800 rounded-md">
              <th className="px-3">#</th>
              <th>Order Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
             {
              loading ? 
              <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
              :

              data.reverse().map((info, i) => (
                <tr
                  initial={{opacity: 0}}
                  animate={{opcaity: 1}}
                  transition={{delay: 0.5,duration: 1.5}}
                  key={i}
                  className="bg-white border px-8 py-4 border-gray-400 text-black text-left rounded-md"
                >
                  <td className="p-3">{i + 1}</td>
                  <td className="text-sm text-gray-500">{info._id}</td>
                  <td className="text-sm text-gray-500">{info.fname}</td>
                  <td className="text-sm text-gray-500">{info.email}</td>
                  <td className="text-sm text-gray-500">
                    <p>Hotel: {info.hotel}</p>
                    <p>Room: {info.roomtype}</p>
                    <p>Bed: {info.beddingtype}</p>
                    <p>Total Room:{info.roomnumber} </p>
                    <p>Meal: {info.mealtype}</p>
                    <p>
                      Booked Days: {info.checkin} - {info.checkout}{" "}
                      ({info.dayCount} days)
                    </p>
                    <p>Total Amount: {info.amount} BDT</p>
                  </td>
                  <td className="text-xs">
                    <span
                      className={`px-2 py-3 text-white rounded-md ${
                        info.status === "paid" ? "bg-green-500" : `bg-yellow-500`
                      }`}
                    >
                      {info.status}
                    </span>
                  </td>
                  <td className="text-xs">
                    <a
                      href={
                        info.status === "paid"
                          ? "#"
                          : `http://localhost:5000/ssl-request?infos=${info._id}`
                      }
                      className={`px-2 py-3 text-white rounded-md ${
                        info.status === "paid" ? "bg-green-500" : `bg-yellow-500`
                      }`}
                    >
                      {info.status === "paid" ? "Already Paid" : "Make Payment"}
                    </a>
                  </td>
                </tr>
              ))}
             
      
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default MyBookings;
