import React from 'react';
import appErrorPic from "../../assets/App-Error.png";
import { useNavigate } from 'react-router';

const AppErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center py-20 bg-[#F5F5F5]'>
            <img className='mx-auto w-[500px] h-[500px] pb-4' src={appErrorPic} alt="" />
            <h1 className='text-5xl font-semibold pb-2'>OPPS!! APP NOT FOUND</h1>
            <p className='text-xl text-[#627382] pb-4'>The App you are requesting is not found on our system.  please try another apps</p>

            <button onClick={() => navigate(-1)} className='text-white px-10 py-3.5 rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold cursor-pointer'>Go Back!</button>

        </div>
    );
};

export default AppErrorPage;