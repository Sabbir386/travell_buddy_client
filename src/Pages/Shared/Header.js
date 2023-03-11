import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcExport } from "react-icons/fc";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    setOpen(!open);
    logOut()
        .then(() => { <Navigate to={'/'}></Navigate> })
        .catch(err => console.log(err));
}

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <header
      className={`fixed top-0 w-full z-[9999999] ${
        navbar ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-[1440px] ml-[50%] translate-x-[-50%] p-5 md:flex md:items-center md:justify-between md:place-items-center">
        <div className="flex justify-between place-items-center">
          <Link
            to={"/"}
            className="text-4xl cursor-pointer text-white font-bold"
          >
            <span className="text-red-500">Travel</span> Buddy
          </Link>
          <span
            onClick={() => setOpen(!open)}
            className="md:hidden block text-white"
          >
            {open ? <FaWindowClose></FaWindowClose> : <FaBars></FaBars>}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-[#000000] z-1" : "top-[-490px]"
          }`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={() => setOpen(!open)}
              to={"/"}
              className="text-sm hover:text-red-500 text-red-400 duration"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={() => setOpen(!open)}
              to={"/hotels"}
              className="text-sm hover:text-red-500 text-red-400 duration"
            >
              Hotel
            </Link>
          </li>
          {
            user ?
            
              <li className="mx-4 my-6 md:my-0">
              <Link onClick={handleLogOut} className="text-lg hover:text-orange-400 text-gray-700 duration">
                <span className='flex items-center gap-1 text-rose-500'><img src={user?.photoURL} alt="" className='w-8 h-8' title={user.displayName}/> <span>LogOut  </span><FcExport></FcExport></span>
              </Link>
            </li>
            :
            <li className="mx-4 my-6 md:my-0">
              <Link onClick={() => setOpen(!open)} to={'/login'} className="text-lg hover:text-white duration bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg">
                Login
              </Link>
            </li>
            
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
