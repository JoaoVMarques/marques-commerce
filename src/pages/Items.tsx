import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IProductsDetails from '../interfaces/IProductsDetails';
import fetchProductDetails from '../services/fetchProductDetails';

function Items() {
  const [product, setProduct] = useState<IProductsDetails>();
  const { id } = useParams();

  const fetchAPI = async() => {
    if(id) {
      setProduct(await fetchProductDetails.get(id));
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);


  return (
    <div>
      { product && (<h3>{product.title}</h3>) }
    </div>
  );
}

export default Items;
