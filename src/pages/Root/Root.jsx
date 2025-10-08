import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                
                {navigation.state === 'loading' && (
                    <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-50">
                        <span className="loading loading-ring loading-lg text-[#00D390]"></span>
                    </div>
                )}

                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;