import React from 'react'
import './Our_besiness.css'
import Taroudant from '../../../Assets/img_achievement/Taroudant.svg'
import Agadir from '../../../Assets/img_achievement/Agadir.svg'
import Guelmim from '../../../Assets/img_achievement/Guelmim.svg'
import Batiment from '../../../Assets/img_achievement/Batiment.svg'
import Crimidesa from '../../../Assets/img_achievement/Crimedsa.svg'
import Setrat from '../../../Assets/img_achievement/Setrat.svg'

const Our_besiness = () => {
  return (
    <div className="our-besiness">
        <div className="container">
            <div className="company">
                <div className="company-item">
                    <div><img src={Taroudant} alt="Province de Taroudant" /></div>
                    <p>Province de Taroudant</p>
                </div>
                <div className="company-item">
                    <div><img src={Agadir} alt="Wilaya d’Agadir" /></div>
                    <p>Wilaya d’Agadir</p>
                </div>
                <div className="company-item">
                    <div><img src={Guelmim} alt="Province de Guelmim" /></div>
                    <p>Province de Guelmim</p>
                </div>
                <div className="company-item">
                    <div><img src={Batiment} alt="Générale Routier « NGE »" /></div>
                    <p>Générale Routier « NGE »</p>
                </div>
                <div className="company-item">
                   <div> <img src={Crimidesa} alt="Setrat Green Construction « SGC »" /></div>
                    <p>Crimidesa</p>
                </div>
                <div className="company-item">
                   <div> <img src={Setrat} alt="Crimidesa" /></div>
                    <p>Setrat Green Construction « SGC »</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Our_besiness
