import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import { Github } from 'lucide-react';

const Navbar = () => {
    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-[#8148EB] font-bold underline" : "text-black"}
        >
            Home
        </NavLink>

        <NavLink
            to="/AllApps"
            className={({ isActive }) => isActive ? "text-[#8148EB] font-bold underline" : "text-black"}
        >
            Apps
        </NavLink>

        <NavLink
            to="/installation"
            className={({ isActive }) => isActive ? "text-[#8148EB] font-bold underline" : "text-black"}
        >
            Installation
        </NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={"/"} className='flex items-center gap-2'>
                        <img className='w-[40px] h-[40px]' src={logo} alt="" />
                        <h3 className='font-bold text-[#8148EB] text-2xl'>Trend Trove</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"https://github.com/ebrahim2355"}>
                        <button className='flex items-center gap-2 text-white font-medium py-3 px-4 rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer'><Github></Github>Contribute</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;