import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Features from "../pages/Features.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import UpdateProfile from "../pages/UpdateProfile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/features',
                element: <Features/>
            },
            {
                path: 'contact_us',
                element: <ContactUs/>
            },
            {
                path: '/update_profile',
                element: <UpdateProfile/>
            }
        ]
    },
]);

export default router