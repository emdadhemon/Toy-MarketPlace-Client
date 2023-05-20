import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='bg-zinc-800 text-white mb-2'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-10 '>
                <div className='flex items-center p-10 bg-slate-700'>
                    <FaPaperPlane className='text-5xl'></FaPaperPlane><span  className='ms-2'>Free Delivery
                       <br /> On Orders Of $200+</span>
                </div>
                <div className='flex items-center  p-10 bg-slate-700 '>
                    <FaPaperPlane className='text-5xl' ></FaPaperPlane><span className='ms-2'>Free Delivery
                       <br /> On Orders Of $200+</span>
                </div>
                <div className='flex items-center   p-10 bg-slate-700'>
                    <FaPaperPlane className='text-5xl'></FaPaperPlane><span className='ms-2'>Free Delivery
                       <br /> On Orders Of $200+</span>
                </div>
                <div className='flex items-center  p-10 bg-slate-700 '>
                    <FaPaperPlane className='text-5xl'></FaPaperPlane><span className='ms-2'>Free Delivery
                      <br />  On Orders Of $200+</span>
                </div>
            </div>
        </div>
    );
};

export default Services;