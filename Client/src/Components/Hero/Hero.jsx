import React from 'react'
import './Hero.css'
import hero_image from '../Assets/fashion-sale-banners_52683-12049.avif'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new</p>
        <p>collections</p>
        <p><strong>for everyone</strong></p>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
