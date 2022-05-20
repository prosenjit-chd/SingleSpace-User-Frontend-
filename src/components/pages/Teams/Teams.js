import React from 'react';
import { FaGlobe, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Teams = ({ name, designation, userphoto, facebookurl, weburl, linkdinurl }) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden">
                <div className=''>
                    <img className="object-cover h-96 w-full bg-gray-200" src={userphoto} alt="teams" />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {designation}
                    </p>
                    <div className='flex text-2xl my-2'>
                        <a href={facebookurl} target='_blank'><FaFacebookSquare className='mr-4 text-gray-700 font-bold' /></a>
                        <a href={weburl} target='_blank'><FaGlobe className='mr-4 text-gray-700 font-bold' /></a>
                        <a href={linkdinurl} target='_blank'><FaLinkedin className='mr-4 text-gray-700 font-bold' /></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;