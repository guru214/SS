import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';
import './Homepage.css'; 

const Home = ({ products }) => {
  return (
    <div>
  
      <HeroSection />

      <Container className="mt-5">
     
        <Row className="mb-5">
          <Col>
            <FeaturedCategories />
          </Col>
        </Row>

      
      </Container>

    
      
    </div>
  );
};

export default Home;
