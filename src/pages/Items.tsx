import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IProductsDetails from '../interfaces/IProductsDetails';
import fetchProductDetails from '../services/fetchProductDetails';

function Items() {
  const [test, settest] = useState<IProductsDetails>();
  const { id } = useParams();

  const fetchAPI = async() => {
    if(id) {
      settest(await fetchProductDetails.get(id));
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);


  return (
    <div>
      { test && (<h3>{test.title}</h3>) }
    </div>
  );
}

export default Items;
