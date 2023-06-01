import React from 'react';
import Services from '../services/Services';
import Events from '../events/Events';
import Reviews from '../reviews/Reviews';
import Doctors from '../doctors/Doctors';
import ContactForm from '../contactForm/ContactForm';
import Header from '../../../shared/header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Events></Events>
            <Reviews></Reviews>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;