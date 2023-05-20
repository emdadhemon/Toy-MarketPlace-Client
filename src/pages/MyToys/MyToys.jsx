import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>{
                        toys.map(toy => 
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;