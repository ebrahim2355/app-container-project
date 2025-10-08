import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RatingsChart = ({ratings}) => {
    return (
        <div>
            <ResponsiveContainer width={"100%"} height={250}>
                <BarChart data={[...ratings].reverse()} layout='vertical' margin={{top: 20, bottom: 5}}>
                    
                    <XAxis type='number'></XAxis>
                    <YAxis dataKey={"name"} type='category' axisLine={false} tickLine={false}></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey={"count"} fill='#FF8811' barSize={25} radius={[4, 4, 4, 4]}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingsChart;