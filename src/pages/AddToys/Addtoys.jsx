import React from 'react';
import { useForm } from "react-hook-form";


const Addtoys = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input border border-gray-800 w-[25%] m-2'
                    {...register("sellername")}
                    placeholder="Your Name"
                    type='text'
                />
                <input
                    className='input border border-gray-800 w-[25%] m-2'
                    {...register("selleremail")}
                    placeholder="Your Email"
                    type='email'
                /> <br />

                <input
                    className='input border border-gray-800 w-[25%] m-2'
                    {...register("toyname")}
                    placeholder="Toy Name"
                    type='text'
                />
                <input
                    className='input border border-gray-800 w-[25%] m-2'
                    {...register("price")}
                    placeholder="price"
                    type='number'
                /> <br />
                <input
                    className='input border border-gray-800 w-[25%] m-2'
                    {...register("photourl")}
                    placeholder="Photo URL"
                    type='text'
                />
                <input
                    className='input border border-gray-800 w-[25%] m-2'
                    {...register("quantity")}
                    placeholder="Available Quantity"
                    type='number'
                /> <br />

                <select className='input border border-gray-800 w-[25%] m-2' {...register("category")}>
                    <option value="marvel">Marvel</option>
                    <option value="batman">BatMan</option>
                    <option value="dccomics">DC Comics</option>
                </select>
                <select className='input border border-gray-800 w-[25%] m-2' {...register("subcategory")}>
                    <option value="spiderman">Spiderman</option>
                    <option value="Hulk">Hulk</option>
                    <option value="captainamerica">Captain America</option>
                    <option value="captainamerica">Superman</option>
                    <option value="wonderwomen">Wonderwomen</option>
                    <option value="batman">Batman</option>
                    <option value="theflash">TheFlash</option>
                    <option value="joker">Joker</option>
                    <option value="aquaman">Aquaman</option>
                </select> <br />

                <input
                    className='input border border-gray-800 w-[15%] m-2'
                    {...register("ratings")}
                    placeholder="Ratings"
                    type='number'
                /> 
                <input
                    className='input border border-gray-800 w-[35%] m-2'
                    {...register("details")}
                    placeholder="Write someting about your toy..."
                    type='details'
                />

                <br />


                <input className='btn border border-gray-800 w-[51%] mt-4' type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default Addtoys;