import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/download.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
//import logo from '../../assets/logo.png'
//{ <img src={logo} alt="" className='logo'/> }

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 60 ? setSticky(true) : setSticky(false);
      })
  },[])

  const[mobileMenu, setMobileMenu] = useState(false);

 const toggleMenu = ()=>{

mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

};

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} `}>

{ <img src={logo} alt="" className='logo'/> }


    
      <ul className= {mobileMenu? '' : 'hide-mobile-menu'}>
        <li><Link to ='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to ='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to ='about' smooth={true} offset={-150} duration={500}>About Gurudev</Link></li>
        <li><Link to ='wisdom' smooth={true} offset={-260} duration={500}>Wisdom</Link></li>
        <li><Link to ='experiences' smooth={true} offset={-260} duration={500}>Experiences</Link></li>
        <li><Link to ='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
