import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import TabCard from './TabCard';

const OthersInfo = () => {
    return (
        <div className='p-8'>
            <Tabs>
                <TabList className="flex border-b gap-4">
                    <Tab className="py-2 px-4 rounded-ss-md cursor-pointer" selectedClassName="bg-orange-500 text-white">Overview</Tab>
                    <Tab className="py-2 px-4 cursor-pointer rounded-t-md" selectedClassName="bg-orange-500 text-white">Location</Tab>
                    <Tab className="py-2 px-4 cursor-pointer rounded-t-md" selectedClassName="bg-orange-500 text-white">Reviews</Tab>
                    <Tab className="py-2 px-4 cursor-pointer rounded-se-md" selectedClassName="bg-orange-500 text-white">Business Hour</Tab>
                </TabList>
                <TabPanel>
                    <TabCard></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard></TabCard>
                </TabPanel>
                <TabPanel>
                    <TabCard></TabCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OthersInfo;