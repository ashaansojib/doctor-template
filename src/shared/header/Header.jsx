import React from 'react';
import Nav from '../nav/Nav';

const Header = () => {
    return (
        <div className="hero py-20">
            <div className="hero-content grid grid-cols-2 justify-between gap-4">
                <div>
                    <h1 className="text-5xl font-bold">Your Best Medical Help Center</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className='flex justify-end'>
                    <img src="https://img.freepik.com/free-photo/looking-excited-surprised-pointing-side_1194-400158.jpg?w=2000" className="max-w-sm rounded-lg shadow-2xls" />
                </div>
            </div>
        </div>
    );
};

export default Header;