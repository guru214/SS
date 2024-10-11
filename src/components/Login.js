import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const Login = ({ setAuth }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/api/login', formData);
  //     setAuth(response.data);  // Save the token and user details to state or local storage
  //     setMessage('Login successful!');
  //   } catch (error) {
  //     setMessage('Invalid email or password');
  //   }
  // };

  return (
    // <Form onSubmit={handleSubmit}>
    <Form>
      <h2>Login</h2>
      {message && <Alert variant="danger">{message}</Alert>}
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} />
      </Form.Group>
      <Button type="submit" variant="primary">Login</Button>
    </Form>
  );
};

export default Login;
