import React, { useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Content from './components/Content';
import './styles/App.css';
import AppContext from './AppContext';
import axios from 'axios';

const App = function() {

    useEffect(() => {
        const trackPage = async () => {
            const pageTrackURL = 'https://page-tracker.onrender.com/track';
            await axios.post(pageTrackURL);
        }

        trackPage();
    }, []);

    return (
        <AppContext>
            <div className='page-container'>
                <SplashScreen />
                <Content />
            </div>
        </AppContext>
    );
}

export default App;