import { Facebook, Github, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#000000a2] p-10'>
            <div className=' max-w-[1440px] mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between'>
                <div className='text-white'>
                    <p className='font-bold text-lg opacity-50 pb-4'>SERVICES</p>
                    <div className='space-y-1.5'>
                        <p><a href="">Branding</a></p>
                        <p><a href="">Design</a></p>
                        <p><a href="">Marketing</a></p>
                        <p><a href="">Advertisement</a></p>
                    </div>
                </div>
                <div className='text-white'>
                    <p className='font-bold text-lg opacity-50 pb-4'>COMPANY</p>
                    <div className='space-y-1.5'>
                        <p><a href="">About us</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">Jobs</a></p>
                        <p><a href="">Press kit</a></p>
                    </div>
                </div>
                <div className='text-white'>
                    <p className='font-bold text-lg opacity-50 pb-4'>LEGAL</p>
                    <div className='space-y-1.5'>
                        <p><a href="">Terms of use</a></p>
                        <p><a href="">Privacy policy</a></p>
                        <p><a href="">Cookie policy</a></p>
                    </div>
                </div>
                <div className='text-white'>
                    <p className='font-bold text-lg opacity-50 pb-4'>SOCIALS</p>
                    <div className='flex gap-2'>
                        <a href="https://www.x.com/ebrahim2355"><Twitter></Twitter></a>
                        <a href="https://www.facebook.com/ebrahim2355"><Facebook></Facebook></a>
                        <a href="https://www.github.com/ebrahim2355"><Github></Github></a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Footer;