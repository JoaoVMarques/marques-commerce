import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function BuyButtons() {
  return (
    <Container>
      <Row className='mb-1'>
        <Col>
          <Button className='fixed-button'>Comprar agora</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="secondary"
            className='fixed-button'
          >Adicionar ao carrinho
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BuyButtons;
