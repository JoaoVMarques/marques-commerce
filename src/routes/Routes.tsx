import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Search from '../pages/Search';

function RoutesComponent() {
  return(
    <Routes>
      <Route path='/item/:id' element={ <Items /> } />
      <Route path="/" element={ <Home /> } />
      <Route path='/search' element={ <Search /> } />
    </Routes>
  );
}

export default RoutesComponent;
