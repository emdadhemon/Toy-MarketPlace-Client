import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Addtoys from "../pages/AddToys/Addtoys";
import Addtoys2 from "../pages/AddToys/Addtoys2";

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
                path : "addtoys",
                element : <Addtoys></Addtoys>
            },
            {
                path : "addtoys2",
                element : <Addtoys2></Addtoys2>
            }
        ]
    }
])

export default route ;