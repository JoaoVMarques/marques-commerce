import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/Navbar';
import Products from '../components/Products';
import ICategories from '../interfaces/ICategories';
import fetchCategories from '../services/fetchCategories';

function Home() {
  const [ categories, setCategories ] = useState<ICategories[]>([]);
  const fetchAPI = async() => {
    setCategories(await fetchCategories.getAll());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <NavbarComponent categories={ categories } />
      { <Products /> }
    </>
  );
}

export default Home;
