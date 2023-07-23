import React from "react";
import '../styles/SplashScreen.css'
import Logo from "./Logo";
import { useAppContext } from "../AppContext";

const SplashScreen = function() {
    const { isLoading } = useAppContext();
    
    if (!isLoading) {
        return;
    }

    return (
        <div className="splash-screen">
            <Logo />
            <div id="spalshscreen-loader">
                <div id="spalshscreen-filler"></div>
            </div>
        </div>
    );
}

export default SplashScreen;