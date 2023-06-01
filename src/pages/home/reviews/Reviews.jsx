import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import ReviewCard from './ReviewCard';
const Reviews = () => {
    return (
        <div>
            <SectionTitle heading="What Your Patient Says" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam praesentium assumenda provident, exercitationem qui alias. Totam quas eum laboriosam?"></SectionTitle>
            <div className='flex justify-between items-center gap-6'>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
};

export default Reviews;