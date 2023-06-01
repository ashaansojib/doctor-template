import React from 'react';

const ServiceCard = () => {
    return (
        <div className='p-4'>
            <div>
                <img src="https://i.ibb.co/8YDR2nK/unnamed.jpg" alt="" />
            </div>
            <div className='lg:space-y-2'>
                <h2 className='text-2xl font-bold pt-2'>Electro Gestrogy Theraypy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dignissimos non ratione rem ex deleniti possimus. Ipsum qui delectus laudantium porro, eos, consequatur neque blanditiis repudiandae debitis quae quia possimus?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta fugiat commodi expedita tempore eligendi et veritatis hic cupiditate ipsum officia.</p>
                <button className='btn btn-outline'>Read More</button>
            </div>
        </div>
    );
};

export default ServiceCard;