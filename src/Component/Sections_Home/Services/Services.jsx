import React from "react";
import "./Services.css";
import excavator from "../../../Assets/img-home/excavator.svg";
import Hammer from "../../../Assets/img-home/Hammer.svg";
import Transport from "../../../Assets/img-home/Transport.svg";
import gasoil from "../../../Assets/img-home/Gasoil.svg";
import hand from "../../../Assets/img-home/Hand.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="header-service">
          <div className="heading">
            <h3>Notre Expertise</h3>
            <h2>SERVICES</h2>
          </div>
          <div className="border"></div>
          <div className="content-head-service">
            <p>
              Notre polyvalence nous permet d'intervenir selon vos besoins pour
              différents types de projets.
            </p>
          </div>
        </div>
        <div className="all-services">
          <div className="service-item">
            <img src={excavator} alt="excavator image" />
            <p>Travaux de construction et travaux divers</p>
          </div>
          <div className="service-item">
            <img src={Hammer} alt="Hammer image" />
            <p>Travaux d’exploitation des mines et Carrière</p>
          </div>
          <div className="service-item">
            <img src={Transport} alt="Transport image" />
            <p>Transport et logistique</p>
          </div>
          <div className="service-item">
            <img src={gasoil} alt="excavator image" />
            <p>Distribution gasoil et lubrifiant</p>
          </div>
          <div className="service-item">
            <img src={hand} alt="excavator image" />
            <p>Activité de négoce</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
