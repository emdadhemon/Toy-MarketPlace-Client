import React from 'react';
import { Link } from 'react-router-dom';

const Alltoytabular = ({ toy }) => {
    const { _id ,photourl, toyname, sellername, selleremail, price, ratings, quantity, details } = toy;
    return (
        <div className='flex justify-between items-center h-full border mb-2 p-4 gap-4'>
            <div className='flex items-center w-[35%] gap-2'>
                <img src={photourl} className='h-20 w-20 rounded object-cover' alt="" />
                <div className='text-sm'>{toyname}</div>
            </div>
            <div>
                <h1 className='text-sm'>{sellername}</h1>
                <h1 className='text-sm'>{selleremail}</h1>
            </div>
            <div>
                <h1 className='text-sm'>Price : ${price}</h1>
                <h1 className='text-sm'>Quantity : {quantity}</h1>
            </div>
            <div className=''>
                <Link to={`/singledetails/${_id}`} className='btn'>View Details</Link>
            </div>

        </div>
    );
};

export default Alltoytabular;