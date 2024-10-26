import React from 'react';
import { Navbar,  Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';  // Custom CSS for additional styling


const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Navbar Brand/Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo">SS TECHNOLOGIES</Navbar.Brand>
        </LinkContainer>

        {/* Toggler for mobile view */}
  
      </Container>
    </Navbar>
  );
};

export default Navigation;
