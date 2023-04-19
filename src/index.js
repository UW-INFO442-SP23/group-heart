import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
// import 'bootstrap/dist/css/bootstrap.css';
import 'whatwg-fetch';

// import local data right here and then pass it down to App as a props


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



