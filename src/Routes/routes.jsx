import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Addtoys from "../pages/AddToys/Addtoys";
import Addtoys2 from "../pages/AddToys/Addtoys2";
import SingleCardData from "../pages/SingleCardData/SingleCardData";
import Alltoys from "../pages/Alltoys/Alltoys";

const route = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "alltoys",
                element : <Alltoys></Alltoys>,
                loader : ()=> fetch('http://localhost:5000/toys')
            },
            {
                path : "addtoys",
                element : <Addtoys></Addtoys>
            },
            {
                path : "addtoys2",
                element : <Addtoys2></Addtoys2>
            },
            {
                path : "/singledetails/:id",
                element : <SingleCardData></SingleCardData>,
                loader : ({params}) => fetch(`http://localhost:5000/findone/${params.id}`)
            }
        ]
    }
])

export default route ;