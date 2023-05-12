import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { HiHome, HiMenuAlt1, HiUser,HiBan,HiOutlineBookmark,HiLibrary } from "react-icons/hi";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Pages/Shared/Header";
import { FcExport } from "react-icons/fc";
const DashboardLayout = () => {
  const { user,logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [adopen,setadOpen] = useState(true);
  const handleLogOut = () => {
    setadOpen(!adopen);
    logOut()
      .then(() => {
        <Navigate to={"/"}></Navigate>;
      })
      .catch((err) => console.log(err));
  };
  const menus = [
    { name: "Home", link: "/", icon: <HiLibrary></HiLibrary> },
    { name: "Dashboard", link: "/dashboard", icon: <HiHome></HiHome> },
   
  ];
  return (
    <section className="flex gap-6">
      <div className={`bg-[#0e0e0e]  h-screen overflow-auto px-4 text-white ${adopen ? 'w-72' : 'w-14'} duration-500`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt1 size={26} className="cursor-pointer" onClick={()=> setadOpen(!adopen)}></HiMenuAlt1>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => 
            <Link key={i} to={menu.link} className="group flex item-center gap-3 p-2 hover:bg-gray-400">
                <div>{menu.icon}</div>
              <h2 style={{transitionDelay: `${i+3}00ms`}} className={`whitespace-pre duration-500 ${!adopen && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
              <h2 className={`${adopen && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu.name}</h2>
            </Link>
            
          )}
          <Link  onClick={handleLogOut} className="group flex item-center gap-3 p-2 hover:bg-gray-400">
                <div><FcExport></FcExport></div>
              <h2 style={{transitionDelay: `${1+3}00ms`}} className={`whitespace-pre duration-500 ${!adopen && 'opacity-0 translate-x-28 overflow-hidden'}`}>Log Out</h2>
              <h2 className={`${adopen && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>Log Out</h2>
            </Link>

          {/* {
            isAdmin && (
                <>
                    hi
                </>
            )
          } */}
        </div>
      </div>
      <div className={`m-3 text-xl text-gray-900 font-semibold ${adopen ? 'w-[calc(100%-18rem)]' : 'w-[calc(100%-3.5rem)]'}`}>
            <Outlet></Outlet>
            
      </div>
    </section>
  );
};

export default DashboardLayout;
