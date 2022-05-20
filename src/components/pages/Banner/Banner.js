import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="home-container-bg">
                <div className="text-center text-white h-full flex flex-col justify-center bg-gray-900/[.6]">
                    <div>
                        <h1 className='lg:text-6xl text-3xl font-bold'>SOFTWARE FIRM</h1>
                        <p className='lg:text-xl text-md font-semibold'>WE EASY YOUR COMPANY'S TARGET .</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;