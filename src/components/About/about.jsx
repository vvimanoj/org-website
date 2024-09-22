import React from 'react'
import './about.css'
import aboutimg from '../../assets/about.jfif'

const about = () => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={aboutimg} alt="" className='about-img'/>
    </div>
    <div className='about-right'>
    <h3>About Kataria Foundation</h3>
      <h2>Bridging the gap in educational access!</h2>
      <p>Kataria Foundation is dedicated to belief that every child deserves a high-quality education, regardless of their circumstances. We are committed to bridging the gap in educational access and opportunities by implementing innovative programs and initiatives. Through our work, we strive to empower children from all backgrounds to unlock their full potential and become active contributors to society. By providing resources, support and advocacy, the Kataria Foundation aims to ensure that every child has the chance to thrive and succeed in their educational journey. Together, we are building a brighter future for generations to come.
      We understand that education is the cornerstone of a prosperous and equitable society. That's why we go beyond just providing access to classrooms; we actively engage with communities to address systemic barriers and promote a culture of lifelong learning. Our comprehensive approach includes teacher training programs, infrastructure development in underserved areas, and partnerships with local stakeholders to tailor solutions to specific needs. We believe in the transformative power of education to break the cycle of poverty, foster innovation, and create opportunities for all. Through collaboration, innovation, and unwavering dedication, the Kataria Foundation is shaping a world where every child can dream, learn, and succeed. Join us in our mission to make quality education a reality for every child.</p>
    </div>
    </div>
  )
}

export default about
