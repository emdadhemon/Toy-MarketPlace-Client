import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Alltoytabular from './Alltoytabular';

const Alltoys = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className='w-[80%] mx-auto mt-12'>
            <div className='mb-4'>
                <input className='input w-[35%] bg-white text-black mr-2' type="text" name="name" placeholder='Search Your Product' id="" />
                <input className='btn ' type="submit" value="Search" />
            </div>
            <div>
                {
                    toys.map(toy => <Alltoytabular key={toy._id} toy={toy}> </Alltoytabular>)
                }
            </div>
        </div>
    );
};

export default Alltoys;