import { Route, Routes } from 'react-router-dom';
import React from 'react';
import App from '../App';

function RoutesComponent() {
  return(
    <Routes>
      <Route path="/home" element={ <App /> } />
    </Routes>
  );
}

export default RoutesComponent;
