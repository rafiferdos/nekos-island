import { Link, NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";


const Navbar = () => {
    const links =
        <>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-400"}><a>Home</a></NavLink>
            <NavLink to='features' className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-400"}><a>Features</a></NavLink>
            <NavLink to='contact_us' className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-400"}><a>Contact Us</a></NavLink>
            <NavLink to='update_profile' className={({ isActive }) => isActive ? "text-purple-700" : "hover:text-purple-400"}><a>Update Profile</a></NavLink>
        </>
    // hover:text-purple-700
    return (
        <>
            <div className="navbar bg-base-100 max-w-7xl mx-auto lg:py-6 w-11/12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 gap-4 p-4 *:font-semibold">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg lg:text-2xl md:text-xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi">Neko&apos;s Island</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 *:lg:text-lg *:opacity-70 gap-6 *:font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'
                        className="btn shadow-none bg-white text-purple-700 hover:bg-purple-50 btn-primary btn-xs sm:btn-sm border-none md:btn-md lg:btn-md"><IoPersonOutline />Login</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar