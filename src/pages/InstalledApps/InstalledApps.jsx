import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStorage } from '../../utilities/addToDB';
import InstalledApp from './InstalledApp';

const InstalledApps = () => {
    const data = useLoaderData();

    const [appList, setAppList] = useState([]);
    const [sort, setSort] = useState("");

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        const myAppList = data.filter(app => convertedStoredApps.includes(app.id));
        setAppList(myAppList);
    }, [data])

    const handleSort = type => {
        setSort(type);
        if(type === "lowToHigh"){
            const sortedByLowToHigh = [...appList].sort((a, b) => a.size - b.size);
            setAppList(sortedByLowToHigh);
        }
        if(type === "highToLow"){
            const sortedByHighToLow = [...appList].sort((a, b) => b.size - a.size);
            setAppList(sortedByHighToLow);
        }
    }

    const handleUninstall = id => {
        const updatedList = appList.filter(app => app.id !== id);
        setAppList(updatedList);

        removeFromStorage(id);
    }
    return (
        <div className='py-20 bg-[#F5F5F5]'>
            <h3 className='text-5xl font-bold pb-4 text-center'>Your Installed Apps</h3>
            <p className='text-xl pb-10 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex justify-between items-center pb-4'>
                    <p className='text-2xl font-semibold'>{appList.length} Apps Found</p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("lowToHigh")}>Low-High</a></li>
                            <li><a onClick={() => handleSort("highToLow")}>High-Low</a></li>
                        </ul>
                    </div>
                </div>

                {
                    appList.map(app => <InstalledApp app={app} key={app.id} handleUninstall={handleUninstall}></InstalledApp>)
                }
            </div>
        </div>
    );
};

export default InstalledApps;