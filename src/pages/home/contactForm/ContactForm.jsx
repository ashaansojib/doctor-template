import React from 'react';
import { FaPhone, FaLocationArrow } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className='bg-green-100 p-4 grid grid-cols-2 items-center gap-4 my-6'>
            <div className='lg:space-y-2'>
                <h2 className='text-2xl font-semibold'>Contact With Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus expedita provident officiis assumenda tempore, soluta dolor incidunt molestias deleniti dolore, facilis impedit culpa, nesciunt voluptatem aliquid explicabo recusandae nostrum.</p>
                <p className='text-gray-600 flex items-center gap-2 text-sm'><FaPhone></FaPhone> +880189239XXX</p>
                <p className='text-gray-600 flex items-center gap-2 text-sm'> <span><FaLocationArrow></FaLocationArrow></span> Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div>
                <form>
                    <div className='grid grid-cols-2 gap-4 mb-2'>
                        <input type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Doctor Name" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="date" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="time" className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <input type="submit" value="Book Now" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;