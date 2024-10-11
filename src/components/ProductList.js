import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductList = ({ products }) => (
  <Container>
    <Row>
      {products.map(product => (
        <Col key={product.id} md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductList;
