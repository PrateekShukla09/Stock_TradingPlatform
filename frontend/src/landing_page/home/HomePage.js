import React from 'react';
import Stats from './Stats';
import Awards from './Awards';
import Hero from './Hero';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return ( 
        <>
            
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>
     );
}

export default HomePage;