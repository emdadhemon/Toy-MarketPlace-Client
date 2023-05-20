import React from 'react';
import { Link } from 'react-router-dom';

const Toycard = ({ toy }) => {
    const { _id, photourl, toyname, price, ratings } = toy;


    return (
        <div className="card grid grid-cols-2 items-center bg-black shadow-xl mt-4 border border-x-teal-50">
            <img className='h-72 w-60 object-cover rounded-s-xl rounded-r-none' src={photourl} alt="Movie" />
            <div className="p-2 space-y-4">
                <h2 className="card-title text-xl">{toyname}</h2>
                <p>Price : ${price}</p>
                <p>Ratings : {ratings}</p>
                <Link to={`/singledetails/${_id}`} className='btn'>View Details</Link>
            </div>
        </div>
    );
};

export default Toycard;