import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (navigation.state === 'loading') {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [navigation.state]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-white">
                <span className="loading loading-ring loading-lg text-[#632EE3]"></span>
                <p className="text-xl mt-4 font-semibold text-gray-600">Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;