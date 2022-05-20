import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../Project/Project';

const FeatureProjects = () => {

    // Use USe State here 
    const [projects, setProjects] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://singlespace.herokuapp.com/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }, []);

    return (
        <div>
            <div className='bg-gray-100'>
                <div className='py-12 lg:px-24 md:px-12 px-8'>
                    <h1 className='text-3xl font-bold text-gray-800 my-8 text-center'>Our Feature Projects</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>

                        {
                            projects.slice(0, 6).map(project => <Project key={project._id} id={project._id} imgsrc={project.coverphoto} title={project.title} client={project.client} />)
                        }

                    </div>
                    <div className='text-center mt-8'>
                        <Link type="button" className="text-black bg-transparent font-semibold border-gray-800 text-xl border-b-2 py-1 text-center hover:text-gray-500" to="/projects">Explore More</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureProjects;