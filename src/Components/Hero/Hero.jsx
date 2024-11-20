import React from 'react'
import './Hero.css'
import hero_image from '../Assets/banner.jpeg'


const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="hero-right">
        <img src={hero_image} alt="" id='banner' />
      </div>
    </div>
  )
}

export default Hero
