import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';


const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Quality Education for every child!</h1>
        <p>
        We understand that education is the cornerstone of a prosperous and equitable society. That's why we go beyond just providing access to classrooms
        </p>
        <Link to="about" smooth={true} offset={550} duration={500}><button className='btn'>Explore More <img src={dark_arrow} alt="" /></button></Link>
      </div>
    </div>
  )
}

export default hero
