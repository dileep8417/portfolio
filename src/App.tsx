import React from 'react';
import SplashScreen from './components/SplashScreen';
import Content from './components/Content';
import './styles/App.css';
import AppContext from './AppContext';

const App = function() {
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