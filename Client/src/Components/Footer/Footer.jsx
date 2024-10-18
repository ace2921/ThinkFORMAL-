import React from 'react'
import './Footer.css'
import footer_icon from '../Assets/OIG1.jpeg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_icon} alt="" />
        <p>ThinkFORMAL</p>
      </div>
      <ul className="footer-links">
        <li>Companyu</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
