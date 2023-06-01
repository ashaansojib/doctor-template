import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import DoctorCard from './DoctorCard';

const Doctors = () => {
    return (
        <div className='py-4'>
            <SectionTitle heading="Our Experts Doctors" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa vitae natus sapiente sunt! Assumenda architecto, rem eos, quo voluptate alias maxime nam aspernatur error hic ullam perferendis, modi voluptatem?"></SectionTitle>
            <div className='grid grid-cols-3 gap-4'>
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
            </div>
        </div>
    );
};

export default Doctors;