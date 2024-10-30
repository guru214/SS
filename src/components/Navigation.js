import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navigation.css';


const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
 
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="menu-button">
            <i className="fas fa-bars menu-icon"></i> Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <LinkContainer to="/">
              <Dropdown.Item>Home</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Devops">
              <Dropdown.Item>DevOps</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/AWS">
              <Dropdown.Item>AWS</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Azure">
              <Dropdown.Item>Azure</Dropdown.Item>
            </LinkContainer>
          </Dropdown.Menu>
        </Dropdown>

       
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo mx-auto">SS TECHNOLOGIES</Navbar.Brand>
        </LinkContainer>

      
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link className="home-button">
              <i className="fas fa-home home-icon"></i> Home
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
