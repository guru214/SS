import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Homepage.css';  

const HeroSection = () => {
  return (
    <Carousel>
   
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://media.gettyimages.com/id/1339667588/photo/devops-concept.jpg?s=612x612&w=0&k=20&c=vQ6qRNx-_pBFxOGNk8iPB7IrfV21Mu773Cm-G56_eKw=" alt="Devops Slide" />
        <Carousel.Caption>
          <h1>MUTHYALA SAI KIRAN</h1>  
          <p>Transform your skills and advance your career today!</p>
      
          <Link to="/category/DevOps" className="btn btn-primary">Explore</Link>
        </Carousel.Caption>
      </Carousel.Item>

  
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://t3.ftcdn.net/jpg/08/07/04/18/240_F_807041828_5rxpWVXFL0bSM1KzEOVKqnexRq1CyIOL.jpg" alt="AWS Slide" />
        <Carousel.Caption>
        <h1>MUTHYALA SAI KIRAN</h1>
          <p>Join a community of learners and take the next step in your journey!</p>
        
          <Link to="/category/AWS" className="btn btn-primary">Explore</Link>
        </Carousel.Caption>
      </Carousel.Item>

   
      <Carousel.Item>
        <img className="d-block w-100 hero-slide" src="https://media.gettyimages.com/id/1786815095/photo/in-this-photo-illustration-a-microsoft-azure-logo-is-displayed-on-a-smartphone-with-a-line.jpg?s=612x612&w=0&k=20&c=foRvEz_STz2wGpe5eppxUzxABSstQzbzVFZb93216FI=" alt="Azure Slide" />
        <Carousel.Caption>
        <h1>MUTHYALA SAI KIRAN</h1>
          <p>Learn at your own pace and achieve your goals!</p>
      
          <Link to="/category/Azure" className="btn btn-primary">Explore</Link>
        </Carousel.Caption>
      </Carousel.Item>

     
    </Carousel>
  );
};

export default HeroSection;
