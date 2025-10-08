import React, { Suspense } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const Apps = ({ data }) => {
    return (
        <div className='bg-[#F5F5F5]'>
            <h1 className=' text-center text-5xl font-bold pb-4'>Trending Apps</h1>
            <p className='text-center text-[#627382] text-xl pb-10'>Explore All Trending Apps on the Market developed by us</p>

            <Suspense>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1440px] mx-auto gap-4'>

                    {
                        data.map(singleApp => <App key={singleApp.id} singleApp={singleApp}></App>)
                    }
                </div>
            </Suspense>

            <Link to={"/AllApps"}>
                <div className='text-center pt-10 pb-20'>
                    <button className=' bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-medium px-10 py-3.5 rounded-sm text-white'>Show All</button>
                </div>
            </Link>
        </div>
    );
};

export default Apps;