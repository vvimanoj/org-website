import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Quality Education for every child!</h1>
        <p>
        We understand that education is the cornerstone of a prosperous and equitable society. That's why we go beyond just providing access to classrooms
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default hero
