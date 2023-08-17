import React from "react";
import "./About.css";
import about from "../../../Assets/img-home/About-img.png";
import certificate from "../../../Assets/img-home/certificate.svg";
import Contact from "../Contact/Contact";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="about">
        <div className="about-hero">
          <div className="container">
            <div className="row">
              {isMobile ? (
                <>
                  <div className="col-md-6 content-about">
                    <div className="head-about">
                      <h3>Une approche unique et innovante</h3>
                      <h2>A propos de nous</h2>
                    </div>
                    <p>
                      Aremo Travaux Sarl est une entreprise polyvalente et
                      dynamique opérant dans plusieurs secteurs clés. En tant
                      que leader, avec une expertise solide et un engagement
                      inébranlable envers ses clients et partenaires, nous
                      sommes fiers de fournir des services de qualité
                      supérieure. Notre équipe expérimentée et hautement
                      qualifiée pour répondre au besoin spécifique de chaque
                      client. Nous mettons l'accent sur la qualité, la sécurité
                      et le respect des délais afin de garantir la satisfaction
                      totale de nos clients.
                    </p>
                  </div>
                  <div className="col-md-6 img-about">
                    <img src={about} alt="About image" />
                    <div className="cart-experience">
                      <div>
                        <img
                          src={certificate}
                          alt="certificate icon"
                          className="no-translate"
                        />
                      </div>
                      <div>
                        <p>équipe</p>
                        <h5>expérimentée</h5>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 img-about">
                    <img
                      src={about}
                      alt="About image"
                      className="about-image-home"
                    />
                    <div className="cart-experience">
                      <div>
                        <img
                          src={certificate}
                          alt="certificate icon"
                          className="no-translate"
                        />
                      </div>
                      <div>
                        <p>équipe</p>
                        <h5>expérimentée</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 content-about">
                    <div className="head-about">
                      <h3>Une approche unique et innovante</h3>
                      <h2>A propos de nous</h2>
                    </div>
                    <p>
                      Aremo Travaux Sarl est une entreprise polyvalente et
                      dynamique opérant dans plusieurs secteurs clés. En tant
                      que leader, avec une expertise solide et un engagement
                      inébranlable envers l'excellence, nous sommes fiers de
                      fournir des services de qualité supérieure. Notre équipe
                      expérimentée et hautement qualifiée se consacre à la
                      réalisation de projets de construction de grande
                      envergure. Nous mettons l'accent sur la qualité, la
                      sécurité et le respect des délais afin de garantir la
                      satisfaction totale de nos clients.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
