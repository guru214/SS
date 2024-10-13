import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Homepage.css';  // Custom CSS for styling

const PopularProducts = ({ products }) => {
  // Ensure products is an array and handle the case where it's undefined
  if (!products || products.length === 0) {
    return <p>No products available at the moment.</p>;
  }

  return (
    <section className="popular-products py-5">
      <div className="container">
        <h2 className="text-center mb-4">Popular Products</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={3} sm={6} className="mb-4">
              <Card className="product-card shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PopularProducts;
