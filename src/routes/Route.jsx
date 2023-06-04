import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Details from "../pages/doctorsDetails/Details";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details',
                element: <Details></Details>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);
export default router;