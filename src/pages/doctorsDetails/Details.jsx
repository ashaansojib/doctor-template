import React from 'react';
import DetailsBanner from './DetailsBanner';
import DoctorInfo from './DoctorInfo';
import OthersInfo from './OthersInfo';

const Details = () => {
    return (
        <div>
            <DetailsBanner></DetailsBanner>
            <DoctorInfo></DoctorInfo>
            <OthersInfo></OthersInfo>
        </div>
    );
};

export default Details;