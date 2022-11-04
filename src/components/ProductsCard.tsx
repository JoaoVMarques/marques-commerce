import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';

function ProductsCard(props: { name: string }) {
  const { name } = props;
  return (
    <Card style={ { width: '18rem' } }>
      <Card.Title>{name}</Card.Title>
    </Card>
  );
}

export default ProductsCard;
