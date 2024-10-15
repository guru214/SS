import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ChangePassword.css';

const ChangePassword = () => {
  const navigate = useNavigate(); // useNavigate hook

  // State to hold form data
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match!");
      return;
    }
    if (newPassword.length < 6) {
      setErrorMessage("Password should be at least 6 characters long.");
      return;
    }

    // Here you can add API call to change password

    // On success, redirect to login page
    navigate('/login');  // use navigate instead of history.push
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <div className="form-container">
        <div className="form-group">
          <label>Old Password:</label>
          <input 
            type="password" 
            value={oldPassword} 
            onChange={(e) => setOldPassword(e.target.value)} 
            placeholder="Enter old password" 
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            placeholder="Enter new password" 
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm new password" 
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handlePasswordChange} className="btn-change-password">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
