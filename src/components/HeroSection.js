import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Homepage.css';  // CSS for styling

const HeroSection = () => {
  return (
    <Carousel>
      {/* Slide 1: Electronics */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://cdn.pixabay.com/photo/2023/06/10/07/17/computer-8053368_960_720.jpg" alt="Electronics Slide" />
        <Carousel.Caption>
          <h1>Discover the Best Electronics</h1>
          <p>Get the latest tech at unbeatable prices!</p>
          <button className="btn btn-primary">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2: Fashion */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://cdn.pixabay.com/photo/2024/03/04/15/41/ai-generated-8612606_1280.png" alt="Fashion Slide" />
        <Carousel.Caption>
          <h1>Trendy Fashion for Everyone</h1>
          <p>Explore our stylish collections!</p>
          <button className="btn btn-primary">Explore</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3: Furniture */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://cdn.pixabay.com/photo/2018/07/11/07/43/interior-3530455_640.jpg" alt="Furniture Slide" />
        <Carousel.Caption>
          <h1>Comfortable and Stylish Furniture</h1>
          <p>Upgrade your living spaces with our furniture range!</p>
          <button className="btn btn-primary">Shop Furniture</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4: Home Appliances */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://cdn.pixabay.com/photo/2017/01/23/09/02/render-2001808_640.jpg" alt="Home Appliances Slide" />
        <Carousel.Caption>
          <h1>Efficient Home Appliances</h1>
          <p>Make your home smarter with our appliances!</p>
          <button className="btn btn-primary">Explore Appliances</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
