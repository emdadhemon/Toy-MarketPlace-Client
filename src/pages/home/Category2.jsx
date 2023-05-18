import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toycard from './Toycard';


const Category2 = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("marvel");

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

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);

    return (
        <div className='mt-24'>
            <h1 className='text-center text-3xl font-bold mb-12'>By Category</h1>
            <div className='w-[80%] mx-auto'>
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab onClick={() => handleActivetab('marvel')}>Marvel</Tab>
                        <Tab onClick={() => handleActivetab('batman')}>Batman</Tab>
                        <Tab onClick={() => handleActivetab('dccomic')}>DC Comic</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                            <button onClick={() => handleActivetab('spiderman')} className="btn">Spiderman</button>
                            <button className="btn">Button</button>
                            <button className="btn">Button</button>
                        </div>
                        <div>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    toys.map((toy, index) => <Toycard
                                        key={index}
                                        toy={toy}
                                    ></Toycard>)
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab onClick={() => handleActivetab('batman')}>Batman</Tab>
                                <Tab onClick={() => handleActivetab('theflash')}>The flash</Tab>
                                <Tab onClick={() => handleActivetab('joker')}>Joker</Tab>
                            </TabList>
                            <TabPanel>
                                <div className='grid grid-cols-4 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-4 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-4 gap-4'>
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
                                <Tab onClick={() => handleActivetab('aquaman')}>Aquaman</Tab>
                                <Tab onClick={() => handleActivetab('wonderwomen')}>Wonder Woman</Tab>
                                <Tab onClick={() => handleActivetab('superman')}>Superman</Tab>
                            </TabList>
                            <TabPanel>
                                <div className='grid grid-cols-4 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-4 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-4 gap-4'>
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
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                toys.map((toy, index) => <Toycard
                                    key={index}
                                    toy={toy}
                                ></Toycard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category2;