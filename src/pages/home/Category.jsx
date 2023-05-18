import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toycard from './Toycard';


const Category = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("spiderman");

    const handleActivetab = category => {
        setActiveTab(category);
    }
    useEffect(() => {
        fetch(`http://localhost:5000/toy/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);

    return (
        <div className='mt-24'>
            <h1 className='text-center text-3xl font-bold mb-4'>By Category</h1>
            <Tabs defaultIndex={0} className='text-center '>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>Batman</Tab>
                    <Tab>DC Comic</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleActivetab('spiderman')}>Spiderman</Tab>
                            <Tab onClick={() => handleActivetab('captainamerica')}>Captain America</Tab>
                            <Tab onClick={() => handleActivetab('hulk')}>Hulk</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleActivetab('spiderman')}>Spiderman</Tab>
                            <Tab onClick={() => handleActivetab('captainamerica')}>Captain America</Tab>
                            <Tab onClick={() => handleActivetab('hulk')}>Hulk</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab onClick={() => handleActivetab('spiderman')}>Spiderman</Tab>
                            <Tab onClick={() => handleActivetab('captainamerica')}>Captain America</Tab>
                            <Tab onClick={() => handleActivetab('hulk')}>Hulk</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;