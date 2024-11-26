import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

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
    <div
      className="contact-container"
      style={{
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Navbar /> {/* Navbar remains untouched */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          color: '#333',
          marginTop: '150px',
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1rem',
          color: '#555',
          marginBottom: '20px',
          lineHeight: '1.6',
        }}
      >
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, drop us a message below.
      </p>
      {submitted ? (
        <div
          className="thank-you-message"
          style={{
            textAlign: 'center',
            backgroundColor: '#f0f8ff',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Thank You!</h3>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            Your message has been received. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name" style={{ marginBottom: '5px', color: '#333' }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
              }}
            />
          </div>
          <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ marginBottom: '5px', color: '#333' }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
              }}
            />
          </div>
          <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="message" style={{ marginBottom: '5px', color: '#333' }}>
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{
                padding: '10px',
                fontSize: '1rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                minHeight: '100px',
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Send Message
          </button>
        </form>
      )}
      <div
        className="contact-info"
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', color: '#222', marginBottom: '10px' }}>
          Our Contact Info
        </h3>
        <p style={{ fontSize: '1rem', color: '#555' }}>Email: support@thinkFORMAL.com</p>
        <p style={{ fontSize: '1rem', color: '#555' }}>Phone: (068)087-5965</p>
        <p style={{ fontSize: '1rem', color: '#555' }}>Follow us on:</p>
        <div
          className="social-icons"
          style={{
            display: 'flex',
            gap: '15px',
            marginTop: '10px',
          }}
        >
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#1da1f2' }}
          >
            Twitter
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#0077b5' }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/just.austin_1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#e1306c' }}
          >
            Instagram
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
