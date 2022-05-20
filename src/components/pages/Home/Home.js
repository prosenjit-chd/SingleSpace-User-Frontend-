import React from 'react';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Header from '../common/Header/Header';
import FeatureProjects from '../FeatureProjects/FeatureProjects';
import Projects from '../Projects/Projects';
import Description from './Description';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header pageName={"home"} />
            <Banner />
            <Description />
            <FeatureProjects />
            <Award />
            <Clients />
        </div>
    );
};

export default Home;