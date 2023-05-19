import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Addtoys from "../pages/AddToys/Addtoys";
import SingleCardData from "../pages/SingleCardData/SingleCardData";
import Alltoys from "../pages/Alltoys/Alltoys";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "alltoys",
                element: <Alltoys></Alltoys>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: "addtoys",
                element: <PrivateRoute><Addtoys></Addtoys></PrivateRoute>
            },
            {
                path: "mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Register></Register>
            },
            {
                path: "/singledetails/:id",
                element: <PrivateRoute><SingleCardData></SingleCardData></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/findone/${params.id}`)
            }
        ]
    }
])

export default route;