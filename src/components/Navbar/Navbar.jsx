import React from 'react';
import { Link } from 'react-router';
import logo from "../../assets/logo.png"
import { Github } from 'lucide-react';

const Navbar = () => {
    const links = <>
        <Link to={"/"}>Home</Link>
        <Link to={"/AllApps"}>Apps</Link>
        <Link to={"/installation"}>Installation</Link>
    </>
    return (
        <div className='flex justify-between items-center md:px-12 py-4'>
            <div className=''>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
                        {links}
                    </ul>
                </div>
            </div>
            <div>
                <Link to={"/"} className='flex items-center gap-2'>
                    <img className='w-[40px] h-[40px]' src={logo} alt="" />
                    <h3 className='font-bold text-[#8148EB] text-2xl'>Trend Trove</h3>
                </Link>
            </div>
            <div className='hidden md:flex gap-8'>
                {links}
            </div>
            <div>
                <button className='flex items-center gap-2 text-white font-medium py-3 px-4 rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2]'><Github></Github>Contribute</button>
            </div>
        </div>
    );
};

export default Navbar;