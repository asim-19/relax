import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>A calm, peaceful, happy mind creates energy & dynamism in you</h1>
        <p>“Breathing & meditation uplift the spirit and bring clarity and strength to the mind” ~ Gurudev</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
