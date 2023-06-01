import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto md:w-3/4 my-6 text-center'>
            <h2 className='text-4xl font-semibold text-orange-600'>{heading}</h2>
            <p className='text-xl font-medium text-sky-900'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;