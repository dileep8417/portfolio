import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './styles/index.css';

const root:HTMLElement = document.getElementById('root')!;

ReactDom.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
