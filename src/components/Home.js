import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="path/to/banner1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="path/to/banner2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container className="mt-4">
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="path/to/product.jpg" />
            <Card.Body>
              <Card.Title>Product Title</Card.Title>
              <Card.Text>$99.99</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
