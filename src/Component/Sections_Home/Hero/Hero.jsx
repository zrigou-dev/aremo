import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import slid1 from "../../../Assets/img-home/slid1.png";
import "./Hero.css";
import certificate from "../../../Assets/img-home/certificate.svg";
import { Link } from "react-router-dom";
import Contact from "../../Global/Contact/Contact";

const Hero = () => {
  return ( 
    <div className="hero-home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-slid">
            <h2 className="head-transparent">AREMO TRAVAUX</h2>
            <h5>Votre partenaire de confiance vers le succès</h5>
            <p>
              Nous mettons à votre disposition notre expertise
              multidisciplinaire pour mener à bien tous vos projets, en vous
              offrant des solutions sur mesure et innovantes
            </p>
            <div className="btn-hero">
              <Link to='/expertise'><button className="service-hero">NOS SERVICES</button></Link>
              <div className="contact-hero"><Contact/> </div>
            </div>
          </div>
          <div className="col-md-6 img-slid">
            <img src={slid1} alt="image Hero" />
            <div className="cart-experience">
              <h2>14.</h2>
              <div>
                <p>ANS</p>
                <h5>D'EXPERIENCE</h5>
              </div>
              <div>
                <img src={certificate} alt="certificate icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
