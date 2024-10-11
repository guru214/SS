import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Cart = ({ cartItems }) => (
  <Container>
    <h2>Your Cart</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <Button variant="light">-</Button> {item.quantity} <Button variant="light">+</Button>
            </td>
            <td>{item.price}</td>
            <td>{item.price * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <h4>Total: $TOTAL</h4>
    <Button variant="success">Proceed to Checkout</Button>
  </Container>
);

export default Cart;
