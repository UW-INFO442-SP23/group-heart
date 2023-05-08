import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App.js';
// import 'bootstrap/dist/css/bootstrap.css';
import 'whatwg-fetch';
import locationData from './data/location.json';

// import local data right here and then pass it down to App as a props


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App locationData={locationData} />
  </BrowserRouter>
  // </React.StrictMode>
);



