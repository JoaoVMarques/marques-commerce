import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsContext from '../context/ProductsContext';
import { IProductsContext } from '../interfaces/IProductsContext';
import ProductsCard from './ProductsCard';

function Products() {
  const { products } = useContext(ProductsContext) as IProductsContext;
  return (
    <Container className='p-5'>
      <Row>
        { products && products.map((product) => (
          <Col
            className='d-flex align-items-stretch mb-4' 
            xs={ 6 }
            sm={ 4 }
            md={ 3 }
            key={ product.id }
          >
            <ProductsCard 
              product={ product }
            />
          </Col>
        ))}

      </Row>
    </Container>
  );
}

export default Products;
