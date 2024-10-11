import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [
    { name: 'Electronics', image: '/path/to/electronics.jpg' },
    { name: 'Fashion', image: '/path/to/fashion.jpg' },
    { name: 'Furniture', image: '/path/to/furniture.jpg' },
    { name: 'Home Appliances', image: '/path/to/home_appliances.jpg' }
  ];

  return (
    <Container>
      <h2>Categories</h2>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src={category.image} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Link to={`/products?category=${category.name}`} className="btn btn-primary">
                  Shop {category.name}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
