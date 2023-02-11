import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HotelDetails from "../Pages/Details/HotelDetails";
import Contact from "../Pages/Home/Contact";
import Home from "../Pages/Home/Home";


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
                loader:(({params}) => fetch(`https://tour-travel-server-two.vercel.app/hotels/${params.id}`)),
                element: <HotelDetails></HotelDetails>
            },
        ]
    }
])