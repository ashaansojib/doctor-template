import React from 'react';
import EventCard from './EventCard';

const Events = () => {
    return (
        <div className='grid grid-cols-3 gap-6 py-6'>
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
        </div>
    );
};

export default Events;