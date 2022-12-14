import React, { useContext } from 'react';
import NavbarComponent from '../components/Navbar';
import CategoriesContext from '../context/CategoriesContext';
import { ICategoriesContext } from '../interfaces/ICategoriesContext';

function Home() {
  const { categories } = useContext(CategoriesContext) as ICategoriesContext;
  return (
    <>
      <NavbarComponent categories={ categories } />
      Página home
    </>
  );
}

export default Home;
