import AnimatedImg from "./AnimatedImage";
import WelcomeMessageWithLinks from './WelcomeMessageWithLinks'
import React from 'react';
const WelcomeSection = ()=>{

    return(
        <div className="w-300 flex justify-between">
            <WelcomeMessageWithLinks/>
            <AnimatedImg/>
        </div>
    )
}

export default WelcomeSection;