import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menu-icon.png'

const navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            window.scrollY > 490 ? setSticky(true) : setSticky(false);
        })
    },[])

    const [mobileMenu, setMobileMenu] = useState(false)   

    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <Link to="hero" smooth={true} offset={0} duration={500}><img src={logo} alt="" className='logo' /></Link>
        <ul className={mobileMenu?"":'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={550} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-100} duration={500}>About us</Link></li>
            <li><Link to="about" smooth={true} offset={550} duration={500}><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={menuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default navbar
