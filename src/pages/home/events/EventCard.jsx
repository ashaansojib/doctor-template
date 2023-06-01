import React from 'react';
import { FaClock } from "react-icons/fa";
const EventCard = () => {
    return (
        <div className='flex gap-3 items-center p-4 bg-slate-700 text-white rounded-md'>
            <span className='text-5xl'><FaClock></FaClock></span>
            <div>
                <h2 className='text-xl font-medium'>Opening Hour</h2>
                <p>Open 9.00AM to 5.00PM </p>
                <p>Everyday</p>
            </div>
        </div>
    );
};

export default EventCard;