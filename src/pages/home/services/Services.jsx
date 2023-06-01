import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className='grid grid-cols-2 justify-between items-center'>
            <div>
                <img src="https://e7.pngegg.com/pngimages/542/747/png-clipart-nursing-care-sildenafil-tadalafil-nurse-doula-male-nurse-blue-service-thumbnail.png" alt="" />
            </div>
            <div className='lg:space-y-4'>
                <h2 className='text-2xl font-semibold'>Our Services</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias beatae iure exercitationem ipsam dolor! Tempora impedit error deleniti accusamus, expedita dolores voluptatem quaerat magnam, alias autem sed, animi labore ut.</p>
                <div>
                    <Tabs>
                        <TabList className="flex rounded-md border gap-4">
                            <Tab className="btn">Cavity Protection</Tab>
                            <Tab className="btn">Cosmetic Dentisty</Tab>
                            <Tab className="btn">Oral Surgery</Tab>
                        </TabList>
                        <TabPanel>
                            <ServiceCard></ServiceCard>
                        </TabPanel>
                        <TabPanel>
                            <ServiceCard></ServiceCard>
                        </TabPanel>
                        <TabPanel>
                            <ServiceCard></ServiceCard>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;