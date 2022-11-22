import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Items from '../pages/Items';

function RoutesComponent() {
  return(
    <Routes>
      <Route path='/item/:id' element={ <Items /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default RoutesComponent;
