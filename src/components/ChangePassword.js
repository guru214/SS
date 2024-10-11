import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const ChangePassword = ({ userId }) => {
  const [formData, setFormData] = useState({ oldPassword: '', newPassword: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`/api/${userId}/password`, formData);
  //     setMessage(response.data.message);
  //   } catch (error) {
  //     setMessage(error.response.data.error);
  //   }
  // };

  return (
    // <Form onSubmit={handleSubmit}>
    <Form>
      <h2>Change Password</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form.Group>
        <Form.Label>Old Password</Form.Label>
        <Form.Control type="password" name="oldPassword" onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" name="newPassword" onChange={handleChange} />
      </Form.Group>
      <Button type="submit" variant="primary">Change Password</Button>
    </Form>
  );
};

export default ChangePassword;
