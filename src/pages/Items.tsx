import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import CategoriesContext from '../context/CategoriesContext';
import { ICategoriesContext } from '../interfaces/ICategoriesContext';
import IProductsDetails from '../interfaces/IProductsDetails';
import fetchProductDetails from '../services/fetchProductDetails';

function Items() {
  const { categories } = useContext(CategoriesContext) as ICategoriesContext;
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
      <NavbarComponent categories={ categories } />
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
