import React from 'react';
import Services from '../services/Services';
import Events from '../events/Events';
import Reviews from '../reviews/Reviews';
import Doctors from '../doctors/Doctors';
import ContactForm from '../contactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Events></Events>
            <Reviews></Reviews>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;