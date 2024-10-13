import React from 'react';
import './Homepage.css';  // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 Your E-commerce Website. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="text-white">Privacy Policy</a> | 
          <a href="/terms" className="text-white"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
