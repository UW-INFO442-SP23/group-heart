import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './Home/HomePage';
import { MapPage } from './Map/MapPage';
import { AboutPage} from './About/AboutPage';

export default function App(props) {

//   const [data, setData] = useState([]);
//   const [alertMessage, setAlertMessage] = useState(null);
//   const [isFetching, setIsFetching] = useState(false);

//   const fetchData = () => {
//     setIsFetching(true);
//     fetch('fairytales.json')
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(json) {
//         setData(json);
//       })
//       .catch((error) => {
//         setAlertMessage(error.message);
//       })
//       .then(() => {
//         setIsFetching(false);
//       });
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])
  
  return (
    <Routes> 
      {/* <Route index element={<HomePage fairytaleData={data} alertMessage={alertMessage} waiting={isFetching}/>} /> */}
      <Route index element={<HomePage />} />
      {/* <Route path="home" element={<HomePage fairytaleData={data} alertMessage={alertMessage} waiting={isFetching}/>} /> */}
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="map/:locationId" element={<MapPage locationData={props.locationData}/>} />
      <Route path="*" element={<Navigate to="/home" />} ></Route>
    </Routes>
  );
}
