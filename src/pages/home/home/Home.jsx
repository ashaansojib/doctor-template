import React from 'react';
import Services from '../services/Services';
import Events from '../events/Events';
import Reviews from '../reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Events></Events>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;