import React, { useContext } from 'react';
import NavbarComponent from '../components/Navbar';
import Products from '../components/Products';
import CategoriesContext from '../context/CategoriesContext';
import { ICategoriesContext } from '../interfaces/ICategoriesContext';

function Home() {
  const { categories } = useContext(CategoriesContext) as ICategoriesContext;
  return (
    <>
      <NavbarComponent categories={ categories } />
      { <Products /> }
    </>
  );
}

export default Home;
