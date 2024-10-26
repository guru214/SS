import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';

import Footer from './Footer';
import './Homepage.css'; 

const Home = ({ products }) => {
  return (
    <div>
      {/* Hero Section for banners or promotional slides */}
      <HeroSection />

      <Container className="mt-5">
        {/* Featured Categories */}
        <Row className="mb-5">
          <Col>
            <FeaturedCategories />
          </Col>
        </Row>

      
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
