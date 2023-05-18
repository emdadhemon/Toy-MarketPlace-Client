import React, { useState } from 'react';

const Addtoys = () => {


    const handleAddToy = event => {

        event.preventDefault();

        const form = event.target;

        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const toyname = form.toyname.value;
        const price = form.price;
        const category = form.category.value;
        const subcategory = form.subcategory.value;

        console.log(sellername,selleremail,category)
    }



    return (
        <div className='text-center'>
            <form onSubmit={handleAddToy} >
                <input className='input border border-gray-800 w-[25%] m-2' type="text" name="sellername" placeholder='Seller Name' id="" />
                <input className='input border border-gray-800 w-[25%]' type="email" name="selleremail" placeholder='Seller Email' id="" /> <br />
                <input className='input border border-gray-800 w-[25%] m-2' type="text" name="toyname" placeholder='Toy Name' id="" />
                <input className='input border border-gray-800 w-[25%]' type="number" name="price" placeholder='Price' id="" /> <br />
                <input className='input border border-gray-800 w-[25%]' name='category' type="text" list="cars" />
                <datalist id="cars">
                    <option>Volvo</option>
                    <option>Saab</option>
                    <option>Mercedes</option>
                    <option>Audi</option>
                </datalist>
                <input className='input border border-gray-800 w-[25%]' name='subcategory' type="text" list="subcategory" />
                <datalist id="subcategory">
                    <option disabled selected>Pick category</option>
                    <option>SpiderMan</option>
                    <option>Hulk</option>
                    <option>CaptainAmerica</option>
                    <option>batman</option>
                    <option>Superman</option>
                    <option>Wonderwomen</option>
                    <option>Batman</option>
                    <option>TheFlash</option>
                    <option>Joker</option>
                </datalist> <br />

                <input className='input border border-gray-800 w-[25%] m-2' type="text" name="photourl" placeholder='photo Url' id="" />
                <input className='input border border-gray-800 w-[25%]' type="number" name="quantity" placeholder='Available Quantity' id="" /> <br />

                <input className='input border border-gray-800 w-[25%] m-2' type="number" name="ratings" placeholder='Ratings' id="" />
                <input className='input border border-gray-800 w-[25%]' type="text" name="details" placeholder='Details About This Toy' id="" /> <br />


                <input className='btn border border-gray-800 w-[51%] mt-4' type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default Addtoys;