import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import picture from '../Components/Assets/IMG_20231126_230344_151.jpg'
import Footer from '../Components/Footer/Footer';

const AboutUs = () => {
  return (
<div className="about-container">
  <Navbar />
  <section
    className="about-intro"
    style={{
      marginTop: '200px',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderBottom: '1px solid #ddd',
    }}
  >
    <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>About Us</h2>
    <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
      We’re a passionate team dedicated to making a difference. Our mission is to provide outstanding products and
      services that bring value to our clients and create a positive impact on the world.
    </p>
  </section>

  <section
    className="about-mission"
    style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #ddd',
    }}
  >
    <h3 style={{ fontSize: '1.5rem', color: '#222', marginBottom: '10px' }}>Our Mission</h3>
    <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6' }}>
      To innovate, inspire, and lead. We believe in creating solutions that empower individuals and businesses alike.
      Through hard work, creativity, and a commitment to excellence, we strive to make the world a better place.
    </p>
  </section>

  <section
    className="about-services"
    style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
    }}
  >
    <h3 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '10px' }}>What We Do</h3>
    <ul
      style={{
        listStyle: 'none',
        padding: '0',
        margin: '0',
        textAlign: 'center',
      }}
    >
      <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>🌟 Deliver innovative tech solutions</li>
      <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>🌐 Connect people and ideas globally</li>
      <li style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>💡 Help businesses achieve their full potential</li>
    </ul>
  </section>

  <section
    className="about-team"
    style={{
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
    }}
  >
    <h3 style={{ fontSize: '1.5rem', color: '#222', marginBottom: '10px' }}>Meet Our Team</h3>
    <div
      className="team-members"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      <div
        className="team-member"
        style={{
          textAlign: 'center',
          maxWidth: '200px',
        }}
      >
        <img
          src={picture}
          alt="Team Member 1"
          style={{
            height: '400px',
            width: '380px',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        />
        <h4 style={{ fontSize: '1.25rem', color: '#333', marginBottom: '5px' }}>Austin Mwelwa</h4>
        <p style={{ fontSize: '1rem', color: '#666' }}>CEO & Founder</p>
      </div>
    </div>
  </section>
  <Footer/>
</div>

  );
};

export default AboutUs
