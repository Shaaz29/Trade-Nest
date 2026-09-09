import React from 'react';
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import KiteConnect from "./KiteConnect";


function HomePage() {
    return (  
        <>
        <Hero />
        <Awards />
        <Stats />
        <KiteConnect/>
        <Pricing />
        <Education />
        <OpenAccount />
        </>
    );
}
export default HomePage;