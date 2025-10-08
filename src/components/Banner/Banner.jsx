import React from 'react';
import playStoreLogo from "../../assets/Vector.png"
import appleStoreLogo from "../../assets/Vector2.png"
import mobilePic from "../../assets/hero.png"
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='text-center bg-[#F5F5F5]'>
            <h1 className='text-7xl font-bold opacity-90 pt-20 pb-4'>We Build <br /> <span className='text-[#8148EB]'>Productive</span> Apps</h1>
            <p className='text-xl max-w-6xl mx-auto mb-10 text-[#627382]'>At TREND-TROVE, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center items-center gap-4 mb-10'>
                <Link to={"https://play.google.com/"}>
                    <button className='flex items-center gap-2.5 font-medium text-xl py-2 px-5 rounded-sm border border-gray-300 cursor-pointer'><img className='w-8 h-8' src={playStoreLogo} alt="" /> Google Play</button>
                </Link>
                <Link to={"https://www.apple.com/app-store/"}>
                    <button className='flex items-center gap-2.5 font-medium text-xl py-2 px-7 rounded-sm border border-gray-300 cursor-pointer'><img className='w-8 h-8' src={appleStoreLogo} alt="" /> App Store</button>
                </Link>
            </div>
            <div className='flex justify-center'>
                <img src={mobilePic}
                    alt="" />
            </div>
            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  py-20 text-white mb-20'>
                <h1 className='text-5xl font-bold pb-10'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row justify-around items-center'>
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='text-6xl font-extrabold py-4'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-6xl font-extrabold py-4'>906K</h1>
                        <p className='pb-4'>Total Reviews</p>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-6xl font-extrabold py-4'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;