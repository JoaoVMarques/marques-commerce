import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';

function RoutesComponent() {
  return(
    <Routes>
      <Route path="/home" element={ <Home /> } />
    </Routes>
  );
}

export default RoutesComponent;
