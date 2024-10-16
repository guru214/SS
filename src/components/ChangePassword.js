import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './PasswordPage.css';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage('Password changed successfully');
      // Perform API call for password change
    }
  };

  return (
    <div className="form-container">
      <h3>Change Password</h3>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="currentPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="newPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Change Password
        </Button>
      </Form>
    </div>
  );
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('A password reset link has been sent to your email.');
      setError(null);
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="form-container">
      <h3>Forgot Password</h3>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Reset Link
        </Button>
      </Form>
    </div>
  );
};

const PasswordPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="password-page">
      <div className="text-center">
        <Button
          variant={showForgotPassword ? 'secondary' : 'primary'}
          onClick={() => setShowForgotPassword(false)}
          className="m-2"
        >
          Change Password
        </Button>
        <Button
          variant={showForgotPassword ? 'primary' : 'secondary'}
          onClick={() => setShowForgotPassword(true)}
          className="m-2"
        >
          Forgot Password
        </Button>
      </div>

      {/* Toggle between Change Password and Forgot Password */}
      {showForgotPassword ? <ForgotPassword /> : <ChangePassword />}
    </div>
  );
};

export default PasswordPage;
