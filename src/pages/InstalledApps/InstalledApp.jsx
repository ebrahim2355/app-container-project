import { Download, Star } from 'lucide-react';
import React from 'react';

const InstalledApp = ({app, handleUninstall}) => {
    const {title, companyName, image, ratingAvg, downloads, size, id} = app;
    return (
        <div className='flex justify-between items-center bg-white rounded-lg mb-4 p-6'>
            <div className='flex gap-4 items-center'>
                <img className='w-[70px] h-[70px] rounded-sm' src={image} alt="" />
                <div>
                    <h3 className='text-xl font-medium mb-3'>{title}: {companyName}</h3>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <p className='flex text-[#00D390] font-medium'><Download></Download> {downloads}</p>
                        <p className='flex text-[#FF8811] font-medium'><Star></Star> {ratingAvg}</p>
                        <p className='text-[#627382]'>{size} MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(id)} className='py-3 px-4 rounded-sm bg-[#00D390] text-white font-semibold cursor-pointer'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;