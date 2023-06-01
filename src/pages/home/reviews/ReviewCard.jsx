import React from 'react';
import { FaHeart } from "react-icons/fa";
const ReviewCard = () => {
    return (
        <div className='border rounded-md p-4'>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/wgstTQ2/unnamed.png" />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>Ashaduzaman</h2>
                        <h3>React Developer</h3>
                    </div>
                </div>
                <div>
                    <span><FaHeart className='text-5xl text-orange-500'></FaHeart></span>
                </div>
            </div>
            <div className='mt-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi voluptatem corporis et provident tempora perferendis suscipit eos culpa laudantium, voluptas repellendus animi vel eveniet, quam soluta obcaecati commodi dignissimos?</p>
            </div>
        </div>
    );
};

export default ReviewCard;