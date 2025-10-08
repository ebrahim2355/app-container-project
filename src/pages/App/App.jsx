import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const App = ({ singleApp }) => {
    

    const { ratingAvg, title, downloads, companyName, image, id } = singleApp;
    return (
        <Link to={`/AppDetail/${id}`}>
            <div className='p-4 bg-white rounded-2xl'>
                <img className='rounded-lg w-full' src={image} alt="" />
                <h3 className='text-xl font-medium py-4'>{title}: {companyName}</h3>
                <div className='flex justify-between'>
                    <p className='text-[#00D390] flex items-center gap-1'><Download></Download> {downloads}</p>
                    <p className='text-[#FF8811] flex items-center gap-1'><Star></Star> {ratingAvg}</p>
                </div>
            </div>
        </Link>
        );
};

export default App;