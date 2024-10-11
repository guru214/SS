import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Checkout = () => (
  <Container>
    <h2>Checkout</h2>
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>

      <Form.Group controlId="formCard">
        <Form.Label>Credit Card</Form.Label>
        <Form.Control type="text" placeholder="Enter credit card number" />
      </Form.Group>

      <Button variant="primary" type="submit">Submit Order</Button>
    </Form>
  </Container>
);

export default Checkout;
