import React from 'react';
import { Link } from 'react-router-dom';

const FooterHead = () => {
    return (
        <div className='grid grid-cols-4 gap-4 py-8 px-4 bg-gray-100'>
            <div className='lg:space-y-2'>
                <h2 className='text-2xl font-semibold'><span className='text-orange-500'>Doctor</span> House</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis voluptas tempora similique dicta dolor debitis corrupt.</p>
                <button className='btn btn-outline text-orange-400 border border-orange-400'>Appointment</button>
            </div>
            <div className='lg:space-y-2'>
                <h2 className='text-xl font-semibold'>Quick Links</h2>
                <ul>
                    <li className='hover:underline'><Link>About Us</Link></li>
                    <li className='hover:underline'><Link>Sevices</Link></li>
                    <li className='hover:underline'><Link>Depertments</Link></li>
                    <li className='hover:underline'><Link>Online Payment</Link></li>
                    <li className='hover:underline'><Link>Doctors</Link></li>
                    <li className='hover:underline'><Link>Contact Us</Link></li>
                    <li className='hover:underline'><Link>My Account</Link></li>
                </ul>
            </div>
            <div className='lg:space-y-2'>
                <h2 className='text-xl font-semibold'>Doc House Services</h2>
                <ul>
                    <li className='hover:underline'><Link>Pediamic Clinic</Link></li>
                    <li className='hover:underline'><Link>Diagnosis Clinic</Link></li>
                    <li className='hover:underline'><Link>Depertments</Link></li>
                    <li className='hover:underline'><Link>Cardiac Clinic </Link></li>
                    <li className='hover:underline'><Link>Laboratory Clinic</Link></li>
                    <li className='hover:underline'><Link>Personal Consulting</Link></li>
                    <li className='hover:underline'><Link>Dental Clinic</Link></li>
                </ul>
            </div>
            <div className='lg:space-y-2'>
                <h2 className='text-xl font-semibold'>Working Hours</h2>
                <ul>
                    <li>Sunday - 10AM to 7PM</li>
                    <li>Monday - 10AM to 7PM</li>
                    <li>Tuseday - 10AM to 7PM</li>
                    <li>Wednesday - 10AM to 7PM</li>
                    <li>Thursday - 10AM to 7PM</li>
                    <li>Friday - 10AM to 7PM</li>
                    <li>Sunday - 10AM to 7PM</li>
                </ul>
            </div>
        </div>
    );
};

export default FooterHead;