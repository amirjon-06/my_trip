import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

import './index.css';

const app = ReactDOMClient.createRoot(document.getElementById('app'));

app.render(<App />);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`).catch((error) => {
            console.error('Service worker registration failed:', error);
        });
    });
}
