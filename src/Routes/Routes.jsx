import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Features from "../components/Features.jsx";
import ContactUs from "../components/ContactUs.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('data.json')
            },
            {
                path: '/update_profile',
                element: <UpdateProfile/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
]);

export default router