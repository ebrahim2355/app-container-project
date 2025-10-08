import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import reviewIcon from "../../assets/icon-review.png"
import RatingsChart from '../../components/RatingsChart/RatingsChart';
import { addToStoreDB, getStoredApp } from '../../utilities/addToDB';
import { toast, ToastContainer } from 'react-toastify';

const AppDetail = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === parseInt(id));

    if (!singleApp) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-center">
                <h1 className="text-5xl font-bold text-gray-600">App Not Found 😞</h1>
                <p className="text-xl text-gray-500 mt-4">
                    The app you’re looking for doesn’t exist or was removed.
                </p>
            </div>
        );
    }

    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = singleApp;

    const [installed, setInstalled] = useState(false);
    useEffect(() => {
        const storedApps = getStoredApp();
        if (storedApps.includes(id.toString())) {
            setInstalled(true);
        }
    }, [id])

    const handleInstall = id => {
        addToStoreDB(id);
        toast(`${title}: ${companyName} is Installed Successfully`);
        setInstalled(true);
    }

    return (
        <div className=' bg-[#F5F5F5] py-20 px-8 md:px-0'>
            <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10 items-center pb-10 border-b border-gray-400'>
                <img className='w-[350px] h-[350px]' src={image} alt="" />
                <div className='flex-1'>
                    <div className='border-b border-gray-400 w-[100%]'>
                        <h1 className='text-3xl font-bold pb-2'>{title}</h1>
                        <p className='text-xl text-[#627382] pb-7 '>Developed by <span className='text-[#8148EB]'>{companyName}</span></p>
                    </div>
                    <div className='flex gap-10 my-7'>
                        <div>
                            <img src={downloadIcon} alt="" />
                            <p className='py-2 opacity-80'>Downloads</p>
                            <h1 className='font-extrabold text-4xl'>{downloads}</h1>
                        </div>
                        <div>
                            <img src={ratingIcon} alt="" />
                            <p className='py-2 opacity-80'>Average Ratings</p>
                            <h1 className='font-extrabold text-4xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="" />
                            <p className='py-2 opacity-80'>Total Reviews</p>
                            <h1 className='font-extrabold text-4xl'>{reviews}</h1>
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                    <button onClick={() => handleInstall(id)} disabled={installed} className={`text-white px-5 py-3.5 rounded-sm bg-[#00D390] text-xl font-semibold cursor-pointer ${installed ? "bg-gray-400" : "bg-[#00d390]"}`}>{installed ? "Installed" : `Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className='max-w-[1440px] mx-auto py-10 border-b border-gray-400'>
                <h2 className='text-2xl font-semibold'>Ratings</h2>

                <RatingsChart ratings={ratings}></RatingsChart>
            </div>

            <div className='mt-10 max-w-[1440px] mx-auto'>
                <h3 className='text-2xl font-semibold mb-6'>Description</h3>
                <p className='text-xl text-[#627382]'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetail;