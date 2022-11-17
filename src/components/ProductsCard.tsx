import React from 'react';
import { Card } from 'react-bootstrap';
import { IProducts } from '../interfaces/IProductsContext';

function ProductsCard(props: { product: IProducts }) {
  const { product } = props;
  return (
    <Card style={ { width: '10rem' } }>
      <Card.Body>
        <Card.Img variant="top" src={ product.thumbnail } />
        <Card.Title>{product.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
