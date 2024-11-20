import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import picture from '../Components/Assets/IMG_20231126_230344_151.jpg'

const AboutUs = () => {
  return (
    <div className="about-container">
      <Navbar/>
      <section className="about-intro">
        <h2>About Us</h2>
        <p>
          We’re a passionate team dedicated to making a difference. Our mission is to provide
          outstanding products and services that bring value to our clients and create a positive impact on the world.
        </p>
      </section>

      <section className="about-mission">
        <h3>Our Mission</h3>
        <p>
          To innovate, inspire, and lead. We believe in creating solutions that empower individuals and businesses alike.
          Through hard work, creativity, and a commitment to excellence, we strive to make the world a better place.
        </p>
      </section>

      <section className="about-services">
        <h3>What We Do</h3>
        <ul>
          <li>🌟 Deliver innovative tech solutions</li>
          <li>🌐 Connect people and ideas globally</li>
          <li>💡 Help businesses achieve their full potential</li>
        </ul>
      </section>

      <section className="about-team">
        <h3>Meet Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <img src={picture} alt="Team Member 1" style={{
              height:'400px',
              width: '380px'
            }}/>
            <h4>Austin Mwelwa</h4>
            <p>CEO & Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs
