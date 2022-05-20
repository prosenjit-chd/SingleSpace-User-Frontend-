import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router';
import Header from '../common/Header/Header';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`https://singlespace.herokuapp.com/api/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);


    return (
        <>
            <Header pageName={"projectDetails"} />
            <div className='bg-white lg:px-24 md:px-12 px-8 py-20'>
                <div className='grid lg:grid-cols-5 grid-cols-1 gap-8'>
                    <div className='lg:col-span-3'>
                        <img className='object-cover h-[450px] w-full' src={project.coverphoto} alt="" />
                    </div>

                    <div className='lg:col-span-2'>
                        <h1 className='text-4xl font-extrabold uppercase'> {project.title}</h1>
                        <h1 className='text-2xl font-bold my-2'>Description:</h1>
                        <ul>
                            {
                                project?.description?.map((d, i) => (
                                    <li className='border-y-2 border-black'>{d}</li>
                                ))
                            }
                        </ul>
                        <div>
                            <p className='text-md font-bold py-1 lg:text-left text-justify'>DEVELOPER:<span className='text-md  font-normal py-1 ml-2 text-justify'>Prosenjit Chowdhury</span></p>
                            <p className='text-md font-bold py-1 lg:text-left text-justify'>CLIENT:<span className='text-md  font-normal py-1 ml-2 text-justify'>{project.client}</span></p>
                            <p className='text-md font-bold py-1 lg:text-left text-justify'>TECHNOLOGY:<span className='text-md  font-normal py-1 ml-2 text-justify'>{project.technology}</span></p>
                            <p className='text-md font-bold py-1 lg:text-left text-justify'>LIVESITE:<span className='text-md  font-normal py-1 ml-2 text-justify'>{project.livesite}</span></p>
                            <p className='text-md font-bold py-1 lg:text-left text-justify'>CATEGORY:<span className='text-md  font-normal py-1 ml-2 text-justify'>Web Site</span></p>
                        </div>
                    </div>
                </div>
                <h1 className='text-3xl font-bold my-2'>More Screenshots</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4'>

                    {
                        project?.imgsrc?.map((p, i) => <div className='my-2 border-2 border-black'>
                            <img className='object-cover h-96 w-full' src={p} alt="" />
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;