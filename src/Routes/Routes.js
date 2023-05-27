import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking/Booking";
import HotelDetails from "../Pages/Details/HotelDetails";
import Contact from "../Pages/Home/Contact";
import Home from "../Pages/Home/Home";
import Hotels from "../Pages/Hotels/Hotels";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings";
import NewHotel from "../Pages/Dashboard/NewHotel";
import AllHotel from "../Pages/Dashboard/AllHotel";
import NewRoom from "../Pages/Dashboard/NewRoom";
import AllRoom from "../Pages/Dashboard/AllRoom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/hotels/:id',
                loader:(({params}) => fetch(`http://localhost:5000/hotels/${params.id}`)),
                element: <HotelDetails></HotelDetails>
            },
            {
                path:'/hotels',
                element: <Hotels></Hotels>
            },
            {
                path:'/booking/:id',
                loader:(({params}) => fetch(`http://localhost:5000/hotels/${params.id}`)),
                element: <Booking></Booking>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/success',
                element: <Hotels></Hotels>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/all-booking',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/new-hotel',
                element: <NewHotel></NewHotel>
            },
            {
                path: '/dashboard/all-hotel',
                element: <AllHotel></AllHotel>
            },
            {
                path: '/dashboard/new-room',
                element: <NewRoom></NewRoom>
            },
            {
                path: '/dashboard/all-room',
                element: <AllRoom></AllRoom>
            },
        ]
    }
])