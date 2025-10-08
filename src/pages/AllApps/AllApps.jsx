import { Search } from 'lucide-react';
import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';


const AllApps = () => {
    const data2 = useLoaderData();

    const [query, setQuery] = useState("");
    const [filteredApps, setFilteredApps] = useState(data2);
    const [loading, setLoading] = useState(false);

    const handleSearch = e => {
        const value = e.target.value;
        setQuery(value);

        setTimeout(() => {
            const filtered = data2.filter(app => app.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredApps(filtered);
            setLoading(false);
        }, 400);
    }
    return (
        <div className='bg-[#F5F5F5]'>
            <h1 className='text-5xl font-bold pt-20 pb-4 text-center'>Our All Applications</h1>
            <p className='text-xl text-[#627382] pb-10 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center max-w-[1440px] mx-auto pb-4'>
                <p className='text-2xl font-semibold'>({filteredApps.length}) Apps Found</p>
                <p className='flex items-center gap-1 opacity-60 py-3 px-4 border border-gray-300 rounded-lg bg-white'><Search></Search><input className='outline-none' type="search" value={query} onChange={handleSearch} placeholder='Search Apps' id="" /></p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <span className="loading loading-ring loading-lg text-[#00D390]"></span>
                </div>
            ) : (
                <Suspense fallback={
                    <div className='flex justify-center items-center py-10'>
                        <span className='loading loading-ring loading-lg'></span>
                    </div>
                }>
                    <div className='max-w-[1440px] mx-auto py-8'>
                        {
                            filteredApps.length > 0 ? (
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                                    {
                                        filteredApps.map(singleApp => <App singleApp={singleApp} key={singleApp.id}></App>)
                                    }
                                </div>
                            ) : (
                                <div className='text-center text-3xl font-semibold text-gray-500 py-20'>
                                    No App Found 😢
                                </div>
                            )
                        }
                    </div>

                </Suspense>
            )}

        </div>
    );
};

export default AllApps;