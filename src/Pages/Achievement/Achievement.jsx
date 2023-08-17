import React from 'react'
import './Achievement.css'
import Hero_achievement from '../../Component/Section_achievement/Hero_achievement/Hero_achievement'
import Our_besiness from '../../Component/Section_achievement/Our_besiness/Our_besiness'
import Contact from '../../Component/Sections_Home/Contact/Contact'
import Realises from '../../Component/Section_achievement/Realises/Realises'

const Achievement = () => {
  return (
    <div className="achievement">
        <div className='secion-achievement'>
        <Hero_achievement/>
        <Our_besiness/>
        </div>
        <Realises/>
         <Contact/>
    </div>
  )
}

export default Achievement
