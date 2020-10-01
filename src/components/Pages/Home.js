import React from 'react'

import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';


function Home() {
    return (
        <React.Fragment>

            <HeroSection header="ADVENTURE AWAITS" tagline="What are you waiting for?" />
            <Cards />

        </React.Fragment>
    )
}

export default Home;
