import React from 'react';
import { Card } from 'react-bootstrap';
import { IProducts } from '../interfaces/IProductsContext';

function ProductsCard(props: { product: IProducts }) {
  const { product } = props;
  return (
    <Card className='product-card'>
      <Card.Img variant="top" src={ product.picture } />
      <hr />
      <Card.Body>
        <Card.Title>R${product.price}</Card.Title>
        <Card.Text>{product.title}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
