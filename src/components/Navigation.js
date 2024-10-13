import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';  // Custom CSS for additional styling

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Navbar Brand/Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo">E-Commerce</Navbar.Brand>
        </LinkContainer>

        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex-grow-1 justify-content-between">

            {/* Home Link */}
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            {/* Dropdown for Categories */}
            <NavDropdown title="Categories" id="categories-dropdown">
              <LinkContainer to="/category/electronics">
                <NavDropdown.Item>Electronics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/fashion">
                <NavDropdown.Item>Fashion</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/furniture">
                <NavDropdown.Item>Furniture</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/home-appliances">
                <NavDropdown.Item>Home Appliances</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            {/* Centered Search Bar */}
            <Form className="d-flex w-75 mx-auto">
              <FormControl
                type="search"
                placeholder="Search for products"
                className="mr-sm-2"
                aria-label="Search"
                style={{ width: '100%' }}  // Ensure the search bar spans the full width of the container
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            
          </Nav>

          <Nav className="ml-auto">
            {/* Cart */}
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </LinkContainer>

            {/* Profile Dropdown */}
            <NavDropdown title={<i className="fas fa-user"></i>} id="profile-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/edit-profile">
                <NavDropdown.Item>Edit Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/change-password">
                <NavDropdown.Item>Change Password</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
