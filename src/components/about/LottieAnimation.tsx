import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import introAnimation from '../../assets/lotties/into_anim.json';

const LottieAnimation = () => {
    return (
        <Player
            src={introAnimation} className='into-animation' 
            loop
            autoplay
        />
    );
}

export default LottieAnimation;