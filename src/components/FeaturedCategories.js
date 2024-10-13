import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Homepage.css';  // Custom CSS for styling

const FeaturedCategories = () => {
  const categories = [
    { name: 'Electronics', img: 'https://t3.ftcdn.net/jpg/01/70/80/52/360_F_170805293_mP8dwQvg7ip4tFRyXNs7xhIs470dBArn.jpg' },
    { name: 'Fashion', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FwUPSog5pIe73xCvhRy6bEDjTW1JkQa1Dw&s' },
    { name: 'Furniture', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa92S_cBe7JDfbiwL9jhdOfSv_SjHlZG6f9w&s' },
    { name: 'Home Appliances', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoZPc6i9Oh2TkVCCzdgVF-a2xFa-MpKaiUQ&s' }
  ];

  return (
    <section className="featured-categories py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Categories</h2>
        <Row>
          {categories.map((category, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="category-card shadow-sm">
                <Card.Img variant="top" src={category.img} />
                <Card.Body>
                  <Card.Title className="text-center">{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FeaturedCategories;
