import { Search } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';


const AllApps = () => {
    const data2 = useLoaderData();
    return (
        <div className='bg-[#F5F5F5]'>
            <h1 className='text-5xl font-bold pt-20 pb-4 text-center'>Our All Applications</h1>
            <p className='text-xl text-[#627382] pb-10 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center max-w-[1440px] mx-auto pb-4'>
                <p className='text-2xl font-semibold'>({data2.length}) Apps Found</p>
                <p className='flex items-center gap-1 opacity-60 py-3 px-4 border border-gray-300 rounded-lg bg-white'><Search></Search><input className='outline-none' type="search" name="" placeholder='Search Apps' id="" /></p>
            </div>

            
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1440px] mx-auto gap-4'>

                    {
                        data2.map(singleApp => <App singleApp={singleApp} key={singleApp.id}></App>)
                    }
                </div>
            
        </div>
    );
};

export default AllApps;