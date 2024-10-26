import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Homepage.css';  // CSS for styling

const HeroSection = () => {
  return (
    <Carousel>
      {/* Slide 1: Electronics */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://media.gettyimages.com/id/1339667588/photo/devops-concept.jpg?s=612x612&w=0&k=20&c=vQ6qRNx-_pBFxOGNk8iPB7IrfV21Mu773Cm-G56_eKw=" alt="Devops Slide" />
        <Carousel.Caption>
          <h1>MUTHYALA SAI KIRAN</h1>  
          <p>Transform your skills and advance your career today!</p>
          {/* Link to electronics category */}
          <Link to="/category/electronics" className="btn btn-primary">Explore</Link>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2: Fashion */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://t3.ftcdn.net/jpg/08/07/04/18/240_F_807041828_5rxpWVXFL0bSM1KzEOVKqnexRq1CyIOL.jpg" alt="AWS Slide" />
        <Carousel.Caption>
        <h1>MUTHYALA SAI KIRAN</h1>
          <p>Join a community of learners and take the next step in your journey!</p>
          {/* Link to fashion category */}
          <Link to="/category/fashion" className="btn btn-primary">Explore</Link>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3: Furniture */}
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://media.gettyimages.com/id/1786815095/photo/in-this-photo-illustration-a-microsoft-azure-logo-is-displayed-on-a-smartphone-with-a-line.jpg?s=612x612&w=0&k=20&c=foRvEz_STz2wGpe5eppxUzxABSstQzbzVFZb93216FI=" alt="Azure Slide" />
        <Carousel.Caption>
        <h1>MUTHYALA SAI KIRAN</h1>
          <p>Learn at your own pace and achieve your goals!</p>
          {/* Link to furniture category */}
          <Link to="/category/furniture" className="btn btn-primary">Explore</Link>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4: Home Appliances */}
      {/* <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://cdn.pixabay.com/photo/2017/01/23/09/02/render-2001808_640.jpg" alt="Home Appliances Slide" />
        <Carousel.Caption>
          <h1>Efficient Home Appliances</h1>
          <p>Make your home smarter with our appliances!</p>
         
          <Link to="/category/home-appliances" className="btn btn-primary">Explore Appliances</Link>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default HeroSection;
