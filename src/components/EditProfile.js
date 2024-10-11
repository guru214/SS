import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const EditProfile = ({ userId }) => {
  const [formData, setFormData] = useState({ username: '', email: '', phone: '' });
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await axios.get(`/api/${userId}`);
  //     setFormData(response.data);
  //   };
  //   fetchUser();
  // }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/${userId}`, formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </Form.Group>
      <Button type="submit" variant="primary">Save Changes</Button>
    </Form>
  );
};

export default EditProfile;
