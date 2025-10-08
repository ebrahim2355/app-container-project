import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import error404 from "../../assets/error-404.png"
import { Link, useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center py-20 bg-[#F5F5F5]'>
                <img className='mx-auto w-[500px] h-[500px] pb-4' src={error404} alt="" />
                <h1 className='text-5xl font-semibold pb-2'>Oops, page not found!</h1>
                <p className='text-xl text-[#627382] pb-4'>The page you are looking for is not available.</p>

                <button onClick={() => navigate(-1)} className='text-white px-10 py-3.5 rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold cursor-pointer'>Go Back!</button>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;