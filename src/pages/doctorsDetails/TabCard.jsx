import React from 'react';

const TabCard = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>About Me</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, numquam unde aliquid reprehenderit at a illum repudiandae. Eaque ad veritatis molestias sit debitis, explicabo, incidunt earum, illum reprehenderit adipisci sint.</p>
            <div className='grid grid-cols-2 gap-10 py-4'>
                <div>
                    <h2 className='text-xl font-semibold'>Education</h2>
                    <li className='font-medium'>American Dentist University</li>
                    <div className='ps-5'>
                        <p>DBS</p>
                        <p>1998 - 2003</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Services</h2>
                    <li>Tooth cleaning</li>
                    <li>Root Canal Therapy</li>
                    <li>Implants</li>
                    <li>Composite Bonding</li>
                    <li>Fissure Sealants</li>
                    <li>Surgical Extractions</li>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Specializations</h2>
                    <li>Children Care</li>
                    <li>Root Canal Therapy</li>
                    <li>Implants</li>
                    <li>Composite Bonding</li>
                </div>
            </div>
        </div>
    );
};

export default TabCard;