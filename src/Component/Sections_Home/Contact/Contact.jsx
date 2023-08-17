import React from "react";
import phone from "../../../Assets/img-home/phone.svg"
import email from "../../../Assets/img-home/email.svg";

const Contact = () => {
  return (
    <div className="contact-me">
      <div className="container">
        <h2>Avez-vous un projet en tête ?</h2>
        <h3>Recevez un devis détaillé en un clic !</h3>
        <div className="btn-contact-about">
          <a href="tel: +212666013052"><button>
            <img src={phone} alt="phone icon" className="contact-btn" /> CONTACT
            RAPIDE
          </button></a>
          <a href="mailto:contact@aremotravaux.ma"><button>
            <img src={email} alt="email icon" /> CONTACT PAR E-MAIL
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
