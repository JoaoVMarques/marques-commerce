import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
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
      <h1>Marques-commerce</h1>
      { <Categories categories={ categories } /> }
    </>
  );
}

export default Home;
