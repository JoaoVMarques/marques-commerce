import React, { useEffect, useState } from 'react';
import fetchCategories from '../services/fetchCategories';

function Home() {
  const [ categories, setCategories ] = useState<any[]>([]);
  const fetchAPI = async() => {
    console.log(await fetchCategories.getAll());
    setCategories(await fetchCategories.getAll());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>Marques-commerce</h1>
      { categories.length > 1 && categories.map((category) =>
        <span key={ category.id }>{category.name}</span>
      ) }
    </>
  );
}

export default Home;
