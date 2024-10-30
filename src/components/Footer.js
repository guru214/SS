import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>MUTHYALA SAI KIRAN</h3>
          {/* <p>Empowering technology solutions.</p> */}
        </div>
        <div className="contact-info">
          <p><FaPhone /> Phone: +91 6301235450</p>
          <p><FaEnvelope /> Email: muthyalasaikiran1999@gmail.com</p>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SS Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
