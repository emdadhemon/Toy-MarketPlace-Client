import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toycard = ({ toy }) => {

    const {user } = useContext(AuthContext);
    const { _id, photourl, toyname, price, ratings } = toy;


    const handleViewdetails =() => {
        if(!user){
            toast("You have to log in first to view details")
        }
    }


    return (
        <div className="card grid grid-cols-2 items-center bg-white shadow-xl mt-4">
            <img className='h-72 w-60 object-cover rounded-s-xl rounded-r-none' src={photourl} alt="Movie" />
            <div className="p-2 space-y-4">
                <h2 className="card-title text-xl">{toyname}</h2>
                <p>Price : ${price}</p>
                <p>Ratings : {ratings}</p>
                <Link onClick={handleViewdetails} to={`/singledetails/${_id}`} className='btn bg-[#fcbd02] border-none text-[#333333]'>View Details</Link>
            </div>
        </div>
    );
};

export default Toycard;