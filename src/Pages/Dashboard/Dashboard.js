import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [hotel, setHotel] = useState(0);
  const [booking, setBooking] = useState(0);
  const [paid, setPaid] = useState(0);
  const [due, setDue] = useState(0);
  const [lineData, setLineData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [isAdmin] = useAdmin(user?.email);
  useEffect(() => {
    fetch(`https://tour-travel-server-two.vercel.app/dashboard?email=${user.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHotel(data.hotelCount);
        setBooking(data.bookingCount);
        setPaid(data.paidTotal);
        setDue(data.dueTotal);
        setLineData(data.userBooking);
        setTotalData(data.hotelBooking);
      });
  }, []);



  return (
    <div className="py-24 md:py-30">
      <h2 className="mb-4">
        Welcome, <span className="text-violet-800">{user.displayName} {isAdmin ? '(Admin)': '(User)'}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
        <div className="px-3 py-4 bg bg-white rounded-md text-gray-500">
          <h3 className="text-violet-800">Total Hotels</h3>
          <p>{hotel}</p>
        </div>
        <div className="px-3 py-4 bg bg-white rounded-md text-gray-500">
          <h3 className="text-violet-800">Total Bookings</h3>
          <p>{booking}</p>
        </div>
        <div className="px-3 py-4 bg bg-white rounded-md text-gray-500">
          <h3 className="text-violet-800">Paid</h3>
          <p>{paid? paid: 0} TK</p>
        </div>
        <div className="px-3 py-4 bg bg-white rounded-md text-gray-500">
          <h3 className="text-violet-800">Pending</h3>
          <p>{due ? due : 0} TK</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-md px-3 py-4">
          <h3>Hotel Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={totalData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="total" stroke="#8884d8" />

              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="_id" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {
          isAdmin ? 
          <div className="bg-white rounded-md px-3 py-4">
          <h3>User wise Booking Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="total"
                startAngle={180}
                endAngle={0}
                data={lineData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  // eslint-disable-next-line
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  // eslint-disable-next-line
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  // eslint-disable-next-line
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#8884d8"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {lineData[index]._id.name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        : <></>
        }
        <div className="bg-white rounded-md px-3 py-4 text-gray-500">
          <h3 className="text-violet-800">Top Booked Hotel</h3>
          <table className=" bg-white w-full">
            <thead className="text-white">
              <tr>
                <th className="bg-violet-800 border text-left px-8 py-4">Hotel</th>
                <th className="bg-violet-800 border text-left px-8 py-4">Booking</th>
              </tr>
            </thead>
            <tbody>
              {totalData.map((hotel, idx) => (
                <tr key={idx}>
                  <td className="border px-8 py-4">{hotel._id}</td>
                  <td className="border px-8 py-4">{hotel.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {
          isAdmin ? 
<div className="bg-white rounded-md px-3 py-4 text-gray-500">
          <h3 className="text-violet-800">Top User</h3>
          <table className=" bg-white w-full">
            <thead className="text-white">
              <tr>
                <th className="bg-violet-800 border text-left px-8 py-4">User</th>
                <th className="bg-violet-800 border text-left px-8 py-4">Total Booking</th>
              </tr>
            </thead>
            <tbody>
              {lineData.map((hotel, idx) => (
                <tr key={idx}>
                  <td className="border px-8 py-4">{hotel._id.name}</td>
                  <td className="border px-8 py-4">{hotel.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        :
        <></>
        }
        
      </div>
    </div>
  );
};

export default Dashboard;
