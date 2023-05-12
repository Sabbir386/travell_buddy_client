import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useState } from 'react';

const Dashboard = () => {
    const {user} = useContext(AuthContext);

    const [infos, setInfos] = useState([]);
  // console.log(user)
  useEffect(() =>{
    fetch(`https://tour-travel-server-two.vercel.app/informations/${user.email}`)
    .then(res => res.json())
    .then(data => setInfos(data))

  },[user]);
  const data = [...infos];
    return (
        <div className='py-24 md:py-30'>
            <h2>Welcome, {user.displayName}</h2>
            <div className='w-full overflow-auto'>
            <h3>All Informations</h3>
            <table className="table w-full border-spacing-6 bg-gray-400">
        <thead>
          <tr className='bg-black border border-slate-800 text-left text-white'>
            <th className='px-3'>#</th>
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
                data.reverse().map((info,i) => <tr key={i} className="bg-black border-slate-800 text-white border text-left">
                <td className='p-3'>{i+1}</td>
                <td>{info._id}</td>
                <td>{info.fname}</td>
                <td >{info.email}</td>
                <td>
                    <p>Hotel: {info.hotel}</p>
                    <p>Room: {info.roomtype}</p>
                    <p>Bed: {info.beddingtype}</p>
                    <p>Total Room:{info.roomnumber} </p>
                    <p>Meal: {info.mealtype}</p>
                    <p>Booked Days: {info.checkin} - {info.checkout} (info.daycount)</p>
                    <p>Total Amount: {info.amount} BDT</p>
                </td>
                <td>
                    {info.status}
                </td>
                <td>
                    <a href={`https://tour-travel-server-two.vercel.app/ssl-request?infos=${info._id}`} className='bg-green-500 px-2 py-3 rounded-md'>Make Payment</a>

                </td>
              </tr>)
            }
          
         
        </tbody>
      </table>
        </div>
        </div>
    );
};

export default Dashboard;