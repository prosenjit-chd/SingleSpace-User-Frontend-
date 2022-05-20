import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ id, imgsrc, title, client }) => {


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link to={`/project/${id}`}>
                <img className="object-cover h-64 w-full hover:scale-110" src={imgsrc} alt="projects" />
                <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {client}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Project;