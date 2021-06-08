import React from 'react';
import Navigation from '../components/Nav/Navigation';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Basics from '../components/Basics/Basics';
import FetchData from '../components/DisplayedData/Axios/FetchData';

const Home = () => {
    
    return (
        <main className={"main home"}>
            <Navigation />
            <div className="padding-w">
                <HeroBanner />
                <Basics />
                <FetchData />
            </div>
            
        </main>
    );
};

export default Home;