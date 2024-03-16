import React from 'react'
import './About.css'
import about_img from '../../assets/srisri4.jpg.webp'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => 
          {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT GURUDEV</h3>
        <h2>As An Ambassador of Peace</h2>
        <p>Gurudev Sri Sri Ravi Shankar is a global humanitarian, spiritual leader and ambassador of peace. Gurudev’s vision of personal and social transformation through mental health and wellness has ignited a global movement in over 180 countries, uplifting the lives of more than 500 million people.</p>
        <p>Born in 1956 in Southern India, Gurudev was a gifted child. By the age of four, he was able to recite the Bhagavad Gita, an ancient Sanskrit scripture, and was often found in meditation. He holds degrees in, both, Vedic literature and physics.</p>
        <p>In 1982, Gurudev entered a ten-day period of silence in Shimoga located in the Indian state of Karnataka. The Sudarshan Kriya, a powerful breathing technique, was born. With time, the Sudarshan Kriya became the center-piece of the Art of Living courses.</p>
      </div>
    </div>
  )
}

export default About
