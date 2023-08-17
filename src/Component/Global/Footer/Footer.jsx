import React from "react";
import "./Footer.css";
import phone from "../../../Assets/img-home/phone.svg";
import email from "../../../Assets/img-home/email.svg";
import location from "../../../Assets/img-home/loction.svg";
import { Link } from "react-router-dom";
import fax from "../../../Assets/Fax.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>A propos de nous</h4>
              <div>
                <p>
                  Nous sommes une équipe passionnée et dévouée, prête à vous
                  offrir des solutions exceptionnelles. Forts de notre
                  expérience et de notre expertise, nous nous efforçons d'être à
                  la pointe de l'innovation pour répondre aux besoins de nos
                  clients. Notre engagement envers l'excellence est au cœur de
                  toutes nos actions et nous nous efforçons , de surpasser les
                  attentes à chaque étape.
                </p>
              </div>
            </div>
            <div className="col-md-4 link-footer">
              <h4>NOS PAGES</h4>
              <div>
                <ul>
                  <li>
                    <Link to="/"> ACCUEILLE </Link>
                  </li>
                  <li>
                    <Link to="/entreprise">Notre Entreprise</Link>
                  </li>
                  <li>
                    <Link to="/expertise">Domaines d'expertises</Link>
                  </li>
                  <li>
                    <Link to="/realisation">Réalisation</Link>
                  </li>
                  <li>
                    <Link to="/engagement">Engagement de la D.G</Link>
                  </li>
                  <li>
                    <Link to="/politique">Politique contre la corruption</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <h4>CONTACTEZ NOUS</h4>
              <div className="contact-info-footer">
                <div className="contact-item">
                  <span>
                    <img src={location} alt="location icon" />
                  </span>
                  <span>
                    N° 686-1er étage-Lot Najah – BP 337- 83000 Taroudant-Maroc
                  </span>
                </div>
                <div className="contact-item">
                  <span>
                    <img src={fax} alt="fax icon" />
                  </span>
                  <span>(212) 5 28 55 11 66</span>
                </div>
                <div className="contact-item">
                  <img src={phone} alt="phone icon" />
                  <div>
                    {/* <span>(212) 6 62 17 76 97</span>
                    <br /> */}
                    <span>(212) 6 66 01 30 52</span>
                    <br />
                    <span>(212) 6 77 71 17 97</span>{" "}
                  </div>
                </div>
                <div className="contact-item">
                  <span>
                    <img src={email} alt="email icon" />
                  </span>
                  <span>contact@aremotravaux.ma <br />
                  aremotravaux2017@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright © 2023 | AREMO TRAVAUX</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
