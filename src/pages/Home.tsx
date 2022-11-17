import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
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
    <Navbar categories={ categories } />
  );
}

export default Home;
