import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;