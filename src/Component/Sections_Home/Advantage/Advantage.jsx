import React from "react";
import "./Advantage.css";

const Advantage = () => {
  return (
    <div className="advantage">
      <div className="header-service">
        <div className="heading">
          <h3>Pourquoi nous choisir ?</h3>
          <h2>EXPERIENCE</h2>
        </div>
        <div className="border"></div>
        <div className="content-head-service">
          <p>
            Nous nous efforçons constamment de dépasser les attentes de nos
            clients.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="grid-advantage">
          <div className="advantage-item">
            <h2>01</h2>
            <h4>
              <span>Q</span>ualité <span>S</span>écurité <span>E</span>
              nvironnement
            </h4>
            <p>
              Une approche intégrée pour satisfaire les besoins clients,
              préserver la santé de notre capital humain, prévenir les accidents
              et protéger l’environnement. Notre objectif est d’assurer des
              performances optimales, la satisfaction des parties prenantes et
              la durabilité.
            </p>
          </div>
          <div className="advantage-item">
            <h2>02</h2>
            <h4>l'innovation</h4>
            <p>
              Notre esprit d'innovation constante nous pousse à repousser les
              limites, à développer des solutions novatrices et à anticiper les
              besoins changeants de nos clients.
            </p>
          </div>
          <div className="advantage-item">
            <h2>03</h2>
            <h4>l'intégrité</h4>
            <p>
              L'intégrité est la pierre angulaire de notre entreprise, guidant
              chaque décision que nous prenons et nous assurant d'agir de
              manière éthique, transparente et responsable envers nos
              partenaires
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;

{
  /* <div className="row g-4">
<div className="col-md-4 advantage-item">
    <h2>01</h2>
    <h4><span>Q</span>ualité <span>S</span>écurité <span>E</span>nvironnement</h4>
    <p>Une approche intégrée pour satisfaire les besoins clients, prévenir les accidents et protéger l’environnement. Notre objectif est d’assurer des performances optimales, la satisfaction des parties prenantes et la durabilité.</p>
</div>
<div className="col-md-4 advantage-item">
    <h2>02</h2>
    <h4>l'innovation</h4>
    <p>Notre esprit d'innovation constante nous pousse à repousser  les limites, à développer des solutions novatrices et à anticiper les besoins changeants de nos clients.</p>
</div>
<div className="col-md-4 advantage-item">
    <h2>03</h2>
    <h4>l'intégrité</h4>
    <p>L'intégrité est la pierre angulaire de notre entreprise, guidant  chaque décision que nous prenons et nous assurant d'agir de manière  éthique, transparente et responsable envers nos partenaires</p>
</div>
</div> */
}
