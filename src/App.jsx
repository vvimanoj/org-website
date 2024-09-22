import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Title from './components/Title/title'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <div className='container'>
        <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
