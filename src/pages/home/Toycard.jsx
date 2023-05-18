import React from 'react';

const Toycard = ({ toy }) => {
    const {picture, name, price, rating} = toy;
    return (
        <div className="card h-64 bg-red-400 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes"  className="rounded-xl h-20" />
            </figure>
            <div className=" card-body items-left text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price : ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Toycard;