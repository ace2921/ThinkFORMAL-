import React from 'react';
import './Footer.css';
import footer_icon from '../Assets/OIG1.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footer_icon} alt="ThinkFORMAL Logo" />
        <p className="footer-brand">ThinkFORMAL!</p>
      </div>
      <ul className="footer-links">
        <li><a href="/">Company</a></li>
        <li><a href="/catalogue">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="footer-social">
        <p>Follow Us</p>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ThinkFORMAL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
