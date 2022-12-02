import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
      { product && (
        <Container>
          <h4>{product.title}</h4>
          <img src={ product.pictures[0].url } />
        </Container>
      ) }
    </div>
  );
}

export default Items;
