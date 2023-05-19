import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCardData = () => {
    const toydetail = useLoaderData();
    const { photourl, toyname, sellername, selleremail, price, ratings, quantity, details } = toydetail;
    console.log(toydetail)
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold text-center my-10'>Single card Details</h1>
            <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  bg-base-100 shadow-xl shadow-slate-500">

                <figure><img className='h-full' src={photourl} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{toyname}</h2>
                    <p className='text-sm'>{details}</p>
                    <p className='text-sm'><strong>Price :</strong> {price}</p>
                    <p className='text-sm'><strong>Available Quantity :</strong> {quantity}</p>
                    <div className='place-items-baseline mt-9'>
                        <h1 className='card-title mb-2'>Seller Information:</h1>
                        <h1 className='text-sm mb-2'>Name : {sellername}</h1>
                        <h1 className='text-sm mb-2'>Email : {selleremail}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardData;