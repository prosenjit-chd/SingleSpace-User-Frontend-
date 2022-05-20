import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import aboutPhoto from '../../../assets/img/about.jpg'
import Header from '../common/Header/Header';
import Teams from '../Teams/Teams';

const About = () => {

    // Use USe State here 
    const [teamschat, setTeamschat] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://singlespace.herokuapp.com/api/teams')
            .then(res => res.json())
            .then(data => setTeamschat(data.teams))
    }, []);

    return (
        <>
            <Header pageName={"about"} />
            <div className='bg-white lg:px-24 md:px-12 px-8 gap-4 py-20'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='lg:mt-4'>
                        <h1 className='text-xl font-semibold text-gray-800 my-2'>About Us</h1>
                        <h1 className='text-2xl font-extrabold uppercase'>WE EASY YOUR COMPANY'S TARGET </h1>

                        <p className='text-gray-600 py-6 md:w-5/6 lg:text-left text-justify'>Software is a passion, a vocation, a calling – as well as a science and a business. It has been described as a social art and also an artful science. Software must be of the highest quality of productivity.</p>
                        <button type="button" className="text-white font-bold bg-slate-600 border-2 border-slate-600 rounded-full px-6 py-3 text-center mr-3 md:mr-0 hover:bg-white hover:text-indigo-700">Explore Now</button>
                        <div className='grid grid-cols-3 mt-6 lg:w-5/6 gap-4 text-center lg:-ml-10'>
                            <div>
                                <h1 className='text-4xl font-extrabold'><CountUp duration="3" end={152} /></h1>
                                <h5 className='text-gray-600 font-semibold text-sm'>HAPPY<br />CLIENTS</h5>
                            </div>
                            <div>
                                <h1 className='text-4xl font-extrabold'><CountUp duration="3" end={86} /></h1>
                                <h5 className='text-gray-600 font-semibold text-sm'>FINISHED<br />PROJECTS</h5>
                            </div>
                            <div>
                                <h1 className='text-4xl font-extrabold'><CountUp duration="3" end={1896} /></h1>
                                <h5 className='text-gray-600 font-semibold text-sm'>WORKING<br />DAYS</h5>
                            </div>
                        </div>
                    </div>
                    <div className='h-96 lg:mt-0 mt-10'>
                        <img className='object-cover h-full w-full' src={aboutPhoto} alt="" />
                    </div>
                </div>

                {/* Team Members */}
                <h1 className='text-3xl font-semibold text-gray-800 mt-16 mb-8'>Our Team Members</h1>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>

                    {
                        teamschat.map(team => <Teams key={team._id} id={team._id} name={team.name} designation={team.designation} userphoto={team.userphoto} facebookurl={team.facebookurl} weburl={team.weburl} linkdinurl={team.linkdinurl} />)
                    }

                </div>
            </div>
        </>

    );
};

export default About;