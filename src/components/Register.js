import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import './Register.css'; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <Container className="form-container">
      <div className="form-header text-center mb-4">
        <h2>Register</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        {/* Name Fields */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Email */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </Form.Group>

        {/* Phone */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </Form.Group>

        {/* Date of Birth */}
        <Form.Group controlId="formDateOfBirth" className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Address Fields */}
        <Form.Group controlId="formStreet" className="mb-3">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Street Address"
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                placeholder="State"
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Country */}
        <Form.Group controlId="formCountry" className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>

      {/* Login Link */}
      <div className="login-link text-center mt-3">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </Container>
  );
};

export default RegisterForm;
