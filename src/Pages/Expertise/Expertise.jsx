import React from 'react'
import Hero from '../../Component/Section_expertise/Hero/Hero'
import All_Expertise from '../../Component/Section_expertise/All_Expertise/All_Expertise'
import Contact from '../../Component/Sections_Home/Contact/Contact'

const Expertise = () => {
  return (
    <div className="expertise">
        <Hero/>
        <All_Expertise/>
        <Contact/>
    </div>
  )
}

export default Expertise
