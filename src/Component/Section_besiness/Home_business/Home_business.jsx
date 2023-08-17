import React from 'react'
import './Home_business.css'
import hero from '../../../Assets/img-business/img-hero-bus.png'

const Home_business = () => {
  return (
    <div className="home-busintess">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={hero} alt="hero image aremo" />
                </div>
                <div className="col-md-6 content-hero-bus">
                    <h2>AREMO TRAVAUX</h2>
                    <h3>HISTORIQUE DE L’ENTREPRISE</h3>
                    <p>La Société Aremo Travaux Sarl est une entreprise de droit Marocain, créée en 2014 comme filière de la société Aremo Ingénierie Sarl. (<a href='http://aremo.ma/'>www.aremo.ma</a> ), En Juin 2014, le groupe directoire de la Société Aremo Ingénierie Sarl et après presque six ans d’activité et de réussite a décidé de séparer les travaux d’exploitation des mines, de constructions, de transport et logistique  des études d’impacts environnementales, faisabilité des projets et autres prestation de services. Pour cette finalité la société Aremo travaux Sarl a repris les activités courantes d’Aremo ingénierie excepte la partie Étude.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home_business
