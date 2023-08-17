import React from 'react'
import './Home.css'
import Hero from '../../Component/Sections_Home/Hero/Hero'
import Services from '../../Component/Sections_Home/Services/Services'
import About from '../../Component/Sections_Home/About/About'
import Advantage from '../../Component/Sections_Home/Advantage/Advantage'
import Features from '../../Component/Sections_Home/Features/Features'
import Contact from '../../Component/Sections_Home/Contact/Contact'
import Our_besiness from '../../Component/Section_achievement/Our_besiness/Our_besiness'

const Home = () => {
  return ( 
    <div className="home">
      <Hero/>
      <Services/>
      <About/>
      <Advantage/>
      <Features/>
      <Contact/>
      <Our_besiness/>
    </div>
  )
}

export default Home
