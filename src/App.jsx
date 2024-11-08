import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Program from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Wisdom from './Components/Wisdom/Wisdom'
import Experiences from './Components/Experiences/Experiences'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => { 

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Program/>
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery' title='Wisdom by Gurudev'/>
      <Wisdom/>
      <Title subTitle='Amazing Experiences' title='What People Says'/>
      <Experiences/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
