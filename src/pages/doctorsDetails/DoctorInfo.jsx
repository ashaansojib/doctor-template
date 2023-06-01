import { Rating } from '@smastrom/react-rating';
import { FaLocationArrow } from "react-icons/fa";
import React, { useState } from 'react';

const DoctorInfo = () => {
    const [rating, setRating] = useState(4)
    return (
        <div className='p-8 bg-gray-200'>
            <div className='grid grid-cols-3'>
                <div className='bg-white rounded-md'>
                    <img src="https://i.ibb.co/w0NRg39/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background-662251-2960-removebg-pr.png" alt="" />
                </div>
                <div className='col-span-2 p-4 lg:space-y-1'>
                    <h2 className='text-xl font-semibold'>Karyen Anderson</h2>
                    <p className='text-gray-600'>BTP - Senior Physiotherapist</p>
                    <div>
                        <Rating style={{ maxWidth: 110 }} value={rating} onChange={setRating}></Rating>
                    </div>
                    <p className='text-gray-600 flex items-center gap-2 text-sm'> <span><FaLocationArrow></FaLocationArrow></span> Dhanmondi, Dhaka, Bangladesh</p>
                    <div className='flex gap-4'>
                        <button className='btn-sm rounded-md border btn-outline'>Dental Flinting</button>
                        <button className='btn-sm btn-outline rounded-md border'>Tech Whitneing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;