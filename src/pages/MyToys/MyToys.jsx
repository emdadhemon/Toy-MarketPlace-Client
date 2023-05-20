import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import UndateToys from './UpdateToys';
import { Link } from 'react-router-dom';
import { FaEdit, FaRemoveFormat, FaTrash } from 'react-icons/fa';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }, [user]);


    return (
        <div>
            <div className="my-toys-container">
                <h1 className="text-center text-4xl font-bold p-4 ">ALL My toys</h1>
                <div>
                    {
                        toys.map(toy => <div key={toy?._id} className='w-[60%] mx-auto flex justify-between items-center h-full border mb-2 p-4 gap-4'>
                            <div className='flex items-center w-[35%] gap-2'>
                                <img src={toy?.photourl} className='h-20 rounded object-cover' alt="" />
                                <div className='text-sm'>{toy?.toyname}</div>
                            </div>
                            <div>
                                <h1 className='text-sm'>Price : ${toy?.price}</h1>
                                <h1 className='text-sm'>Quantity : {toy?.quantity}</h1>
                            </div>
                            <div className='f'>
                                <Link to={`/updatetoy/${toy?._id}`}><button to={`/singledetails/${toy?._id}`} className='btn btn-outline btn-info mr-2'><FaEdit></FaEdit></button></Link>
                                <button className='btn btn-error'><FaTrash></FaTrash></button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;