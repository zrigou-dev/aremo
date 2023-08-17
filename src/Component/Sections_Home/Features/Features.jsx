import React from "react";
import "./Features.css";
import quality from "../../../Assets/img-home/quality.svg";
import disponible from "../../../Assets/img-home/disponible.svg";
import prix from "../../../Assets/img-home/prix.svg";
import morocco from "../../../Assets/img-home/morocco.svg";

const Features = () => {
  return (
    <div className="features">
        <h2>nous servons partout au maroc</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="feaeture-item">
              <img src={quality} alt="Agents qualifiés" />
              <h3>Agents qualifiés</h3>
              <p>
                Des experts chevronnés dans leur domaine, dotés d'un
                savoir-faire approfondi et d'une expertise technique pointue.
              </p>
            </div>
            <div className="feaeture-item">
              <img src={disponible} alt="TOUJOURS DISPONIBLE" />
              <h3>TOUJOURS DISPONIBLE</h3>
              <p>
                Notre équipe est toujours disponible pour répondre à vos
                besoins, que ce soit pendant les heures de travail, les
                week-ends ou même les jours fériés.
              </p>
            </div>
            <div className="feaeture-item">
              <img src={prix} alt="MEILLEURES PRIX" />
              <h3>MEILLEURES PRIX</h3>
              <p>
                Notre engagement envers les clients : meilleur prix, qualité
                sans compromis, excellent rapport qualité-prix.
              </p>
            </div>
          </div>
          <div className="col-md-6 img-drappeux">
            <img src={morocco} alt="morocco Drapeaux" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
