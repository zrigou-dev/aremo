import React from "react";
import "./Hero.css";
import hero from "../../../Assets/img-expertise/hero-expertise.png";

const Hero = () => {
  return (
    <div className="hero-expertise">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>AREMO TRAVAUX</h2>
            <h3>Domaine d'expertise</h3>
            <p>
              Notre société se distingue par son capital humain hautement
              qualifié, ayant une formation variée et une solide expérience dans
              divers domaines tels que la gestion de projets, l'exploitation
              minière, la construction, la logistique, et bien plus. Notre
              réussite découle de notre engagement envers nos clients et notre
              adhésion à des normes rigoureuses en matière de qualité,
              d'hygiène, de sécurité et d'environnement. Aremo Travaux Sarl est
              reconnue comme un partenaire de confiance et de performance au
              sein de l'industrie.
            </p>
          </div>
          <div className="col-md-6">
            <img src={hero} alt="hero image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
