import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-8 py-20 lg:px-24 md:px-12 px-8 bg-slate-600 text-white'>
                <div className="lg:mx-auto">
                    <h1 className='text-2xl font-bold'>SINGLESPACE,</h1>
                    <h1 className='text-2xl font-bold'>YOUR SOFTWARE STUDIO</h1>

                </div>

                <div className="lg:mx-auto">
                    <ul >
                        <li className="w-full text-lg font-bold mb-4">FIND US</li>
                        <li className="w-full py-1">H#41/21 R# A DHANMONDI</li>
                        <li className="w-full py-1">Dhaka-1209</li>
                        <li className="w-full py-2">Bangladesh</li>
                    </ul>
                </div>
                <div className="lg:mx-auto">
                    <ul className="">
                        <li className="w-full text-lg font-bold mb-4">LET’S TALK</li>
                        <li className="w-full py-1">prosenjit.chd@gmail.com</li>
                        <li className="w-full py-1">+8801789146828</li>
                    </ul>
                </div>
                <div className="lg:mx-auto">
                    <h3 className='text-lg font-bold mb-4'>FOLLOW US</h3>
                    <div className='flex text-3xl'>
                        <a href="https://www.facebook.com/prosenjit.chowdhury.988" target='_blank'><FaFacebookSquare className='mr-4 text-white' /></a>
                        <a href="https://twitter.com/home" target='_blank'><FaTwitterSquare className='mr-4 text-white' /></a>
                        <a href="https://www.linkedin.com/in/prosenjit-chowdhury-4968b1195/" target='_blank'><FaLinkedin className='mr-4 text-white' /></a>

                    </div>

                </div>
            </div>

            <div className='text-center text-gray-800 text-sm py-4 border-t-2'>Copyright © 2022 Singlespace</div>
        </div>
    );
};

export default Footer;