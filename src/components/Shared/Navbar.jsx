
import { NavLink } from 'react-router';

import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";






const Links = (


    <>
        <NavLink to={"/"} end className={({ isActive }) => isActive ? "gradient-text-active-nav" : ""}>Home</NavLink>
        <NavLink to={"/apps"} className={({ isActive }) => isActive ? "gradient-text-active-nav" : ""} >Apps</NavLink>
        <NavLink to={"/installation"} className={({ isActive }) => isActive ? "gradient-text-active-nav" : ""} >Installation</NavLink>
    </>
);


const Navbar = () => {



    return (
        <div className='max-w-7xl mx-auto px-4 md:px-4 lg:px-4'>

            <div className="navbar bg-base-100 flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-4 lg:px-4">

                {/* Left side: Hamburger + Logo */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        <a href='/' className="text-2xl font-bold gradient-text bg-clip-text text-transparent">
                            HERO.IO
                        </a>
                    </div>
                </div>

                {/* Middle: Links (desktop only) */}
                <div className="hidden lg:flex navbar-center">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {Links}
                    </ul>
                </div>

                {/* Right side: Contribute button */}
                <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
                    <a href="https://github.com/hasnatjamil"
                        className="gradient-btn gradient-btn-outline inline-flex items-center font-semibold px-8 py-3 rounded-sm text-white w-full md:w-auto">
                        <FaGithub className="mr-2" /> Contribute
                    </a>
                </div>
            </div>


        </div>
    );
};

export default Navbar;