import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer.jsx";

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root