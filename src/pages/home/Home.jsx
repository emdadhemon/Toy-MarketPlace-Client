import React from 'react';
import Banner from '../shared/Banner';
import Category from './Category';
import Gallery from './Gallery';
import useTitle from '../../Title/Title';
import Services from '../Services';


const Home = () => {
    useTitle("Home")
    return (
        <div className='bg-[#dfdfe0] w-[90%] mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Services></Services>
        </div>
    );
};

export default Home;