import React from 'react'
import './Business.css'
import Home_business from '../../Component/Section_besiness/Home_business/Home_business'
import Services from '../../Component/Sections_Home/Services/Services'
import About_besiness from '../../Component/Section_besiness/About_besiness/About_besiness'
import Contact from '../../Component/Sections_Home/Contact/Contact'

const Business = () => {
  return (
    <div className="business">
        <Home_business/>
        <Services/>
        <About_besiness/>
        <Contact/>
    </div>
  )
}

export default Business
