import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
// import './CSS/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <Navbar/>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, drop us a message below.</p>
      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank You!</h3>
          <p>Your message has been received. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
      <div className="contact-info">
        <h3>Our Contact Info</h3>
        <p>Email: support@thinkFORMAL.com</p>
        <p>Phone: (068)087-5965</p>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
