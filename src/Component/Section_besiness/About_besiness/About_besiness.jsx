import React from "react";
import "./About_besiness.css";
import img1 from "../../../Assets/img-business/img-bus-1.png";
import img2 from "../../../Assets/img-business/img-bus-2.png";
import { useMediaQuery } from "react-responsive";

const About_besiness = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="about-besiness">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            La société dispose d'une équipe hautement qualifiée dans la gestion
            de projets, l'exploitation minière souterraine et à ciel ouvert, les
            travaux de construction, la commercialisation, le transport et la
            logistique. Cette équipe possède de vastes compétences dans
            l'exploitation minière, la gestion administrative, la planification
            et la gestion de la production sur les chantiers miniers.
          </div>
          <div className="col-md-6">
            <img src={img1} alt="company features " />
          </div>
        </div>
        <div className="row">
          {isMobile ? (
            <>
              <div className="col-md-6">
                Depuis sa création en 2014, la société Aremo Travaux Sarl
                développe ses activités en collaboration avec différents
                partenaires, dont l'activité minière représente 60% de son
                chiffre d'affaires. La société accorde une grande importance à
                son capital humain, considérant celui-ci comme le moteur de ses
                activités. Ainsi, la préservation de la santé humaine et de
                'environnement de travail est une orientation stratégique
                constamment éveloppée par l'entreprise.
              </div>
              <div className="col-md-6">
                <img src={img2} alt="company features " />
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6">
                <img src={img2} alt="company features " />
              </div>
              <div className="col-md-6">
                Depuis sa création en 2014, la société Aremo Travaux Sarl
                développe ses activités en collaboration avec différents
                partenaires, dont l'activité minière représente 60% de son
                chiffre d'affaires. La société accorde une grande importance à
                son capital humain, considérant celui-ci comme le moteur de ses
                activités. Ainsi, la préservation de la santé humaine et de
                'environnement de travail est une orientation stratégique
                constamment éveloppée par l'entreprise.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About_besiness;
