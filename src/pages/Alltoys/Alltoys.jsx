import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Alltoytabular from './Alltoytabular';

const Alltoys = () => {
    // const toys = useLoaderData();
    const [toys, settoys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            settoys(data);
          });
      }, []);

      const handleSearch = () => {
        fetch(`http://localhost:5000/searchtoysByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            settoys(data);
          });
      };

    console.log(toys)
    return (
        <div className='w-[80%] mx-auto mt-12'>
            <div className='mb-4'>
                <input onChange={(e) => setSearchText(e.target.value)} className='input w-[35%] bg-white text-black mr-2' type="text" name="name" placeholder='Search Your Product' id="" />
                <input onClick={handleSearch} className='btn ' type="submit" value="Search" />
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