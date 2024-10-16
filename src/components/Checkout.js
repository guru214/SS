import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Card, ListGroup } from 'react-bootstrap';

const CheckoutPage = ({ cartItems = [], totalPrice = 0 }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'credit-card', // default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout process here
    alert('Order placed successfully!');
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Billing & Shipping Information Form */}
        <Col md={8}>
          <h2>Checkout</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter shipping address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="postalCode">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br></br>

            <h4>Payment Method</h4> <br></br>
            <Form.Group controlId="paymentMethod">
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Credit Card"
                value="credit-card"
                checked={formData.paymentMethod === 'credit-card'}
                onChange={handleChange}
              /> <br></br>
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Debit Card"
                value="debit-card"
                checked={formData.paymentMethod === 'debit-card'}
                onChange={handleChange}
              /><br></br>
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="UPI"
                value="upi"
                checked={formData.paymentMethod === 'upi'}
                onChange={handleChange}
              /><br></br>
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Cash on Delivery"
                value="cash-on-delivery"
                checked={formData.paymentMethod === 'cash-on-delivery'}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Place Order
            </Button>
          </Form>
        </Col>

        {/* Order Summary */}
        <Col md={4}>
          <h2>Order Summary</h2>
          <Card>
            <ListGroup variant="flush">
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row>
                      <Col>{item.name}</Col>
                      <Col>${(item.price * item.quantity).toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>Your cart is empty</ListGroup.Item>
              )}
              <ListGroup.Item>
                <h4>Total: ${totalPrice ? totalPrice.toFixed(2) : '0.00'}</h4>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
