import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsContext from '../context/ProductsContext';
import { IProductsContext } from '../interfaces/IProductsContext';
import ProductsCard from './ProductsCard';

function Products() {
  const { products } = useContext(ProductsContext) as IProductsContext;
  return (
    <Container>
      <Row>
        { products && products.map((product) => (
          <Col key={ product.id }>
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
