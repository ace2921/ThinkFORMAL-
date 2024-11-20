import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle subscription
  const handleSubscribe = async () => {
    if (!email) {
      alert('Please enter a valid email.');
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      // Check the response from the backend
      if (response.ok) {
        if (data.exists) {
          alert('Email already subscribed to the newsletter.');
          setMessage('Email already subscribed to the newsletter.');
        } else {
          alert('Email successfully posted to the newsletter!');
          setMessage('Email successfully posted to the newsletter!');
        }
      } else {
        alert('Something went wrong. Please try again.');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again later.');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe!!</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Newsletter;
