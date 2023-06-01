import React from 'react';
import { Link } from 'react-router-dom';

const DetailsBanner = () => {
    return (
        <div className="py-20 px-8 bg-green-500 text-white">
            <p><Link to="/">Home</Link> / Doctors Profile</p>
            <h3 className='text-xl font-semibold'>Doctor Profile</h3>
        </div>
    );
};

export default DetailsBanner;