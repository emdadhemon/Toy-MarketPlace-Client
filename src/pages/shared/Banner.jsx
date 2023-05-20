import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import { Link } from 'react-router-dom';
import banner from "../../assets/banner.jpg"

import Typewritter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='mt-2 h-96 flex items-center'>

            <Carousel className='text-center w-full' showThumbs={false} emulateTouch>
                <div className='relative'>
                    <img src={first} className='object-cover object-center h-96' />
                    <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='font-bold text-5xl text-white '>
                            <Typewritter options={
                                {
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    strings: "Welcome To Kidpalace"
                                }
                            }>

                            </Typewritter>
                        </h1>
                        <p className="lg:text-md sm:text-sm mt-6">
                            Quality and freshness come first. Our mission is to provide our <br /> customers with the finest selection of locally sourced and globally inspired food products, all at competitive prices.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={second} className='object-cover object-center h-96' />
                    <div className="carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className='font-bold text-5xl text-[#147970] '>
                            <Typewritter options={
                                {
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    strings: "Welcome To Kidpalace"
                                }
                            }>

                            </Typewritter>
                        </h1>
                        <p className="lg:text-md sm:text-sm mt-6">
                            Quality and freshness come first. Our mission is to provide our <br /> customers with the finest selection of locally sourced and globally inspired food products, all at competitive prices.</p>
                    </div>
                </div>
            </Carousel>



        </div>
    );
};

export default Banner;