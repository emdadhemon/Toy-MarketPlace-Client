import React from 'react';

const Toycard = ({ toy }) => {
    const { photourl, toyname, price, rating } = toy;
    return (
        <div>
            <div className="card h-80 bg-blue-300 ">
                <figure>
                    <img src={photourl} alt="Shoes" className="rounded-top-xl w-100 h-44 object-cover mt-2" />
                </figure>
                <div className="items-center text-center my-5 px-4">
                    <h2 className="font-bold text-sm">{toyname}</h2>
                    <p className='py-2 text-sm '> Price: {price}</p>
                </div>
                {/* <Link to={`/recipe/${recipe._id}`} className="text-center bg-success font-medium py-2 mt-auto hover:bg-green-700 hover:text-white">View Details</Link> */}
            </div>
        </div>
    );
};

export default Toycard;