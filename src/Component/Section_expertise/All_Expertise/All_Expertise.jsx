import React from "react";
import "./All_Expertise.css";
import excavator from "../../../Assets/img-home/excavator.svg";
import Hammer from "../../../Assets/img-home/Hammer.svg";
import Transport from "../../../Assets/img-home/Transport.svg";
import gasoil from "../../../Assets/img-home/Gasoil.svg";
import hand from "../../../Assets/img-home/Hand.svg";

const All_Expertise = () => {
  return (
    <div className="all-expertise">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="head-expertise">
              <img src={Transport} alt="excavator image" />
              <p>Transport et logistique</p>
            </div>
            <div className="content-expertise">
              <p>
                Aremo Travaux Sarl se démarque en transport et logistique,
                offrant une gamme complète de services pour répondre aux besoins
                des clients à tout moment. Avec une flotte de véhicules bien
                entretenus, l'entreprise assure un transport sûr et efficace de
                diverses marchandises, qu'il s'agisse de matériaux de
                construction, de produits finis ou d'équipements. L'accent est
                mis sur la qualité, le respect des délais et la sécurité des
                marchandises, avec une traçabilité précise des expéditions.
                Grâce à son expertise et sa capacité de gestion, Aremo Travaux
                Sarl fournit des solutions de transport et de logistique fiables
                et adaptées aux besoins spécifiques de chaque client.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="head-expertise">
              <img src={excavator} alt="excavator image" />
              <p>Travaux de construction et travaux divers</p>
            </div>
            <div className="content-expertise">
              <p>
                Aremo Travaux Sarl, entreprise spécialisée dans les travaux de
                construction et projets variés, excelle grâce à son équipe
                expérimentée. De la résidentielle à l'industrielle, elle mène
                avec succès une gamme étendue de projets. Du neuf à la
                rénovation, elle répond aux besoins tout en respectant délais,
                normes et budgets. La sécurité des employés est primordiale,
                avec des mesures rigoureuses. Au-delà de la construction, Aremo
                Travaux Sarl propose aménagement, terrassement, voirie et génie
                civil, offrant une réponse globale à une clientèle variée.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="head-expertise">
              <img src={Hammer} alt="excavator image" />
              <p>Travaux d’exploitation des mines et Carrières</p>
            </div>
            <div className="content-expertise">
              <p>
                Aremo Travaux Sarl se spécialise dans l'exploitation minière et
                des carrières. Grâce à son équipe expérimentée, elle gère
                efficacement chaque étape, en mettant l'accent sur la sécurité,
                la communication et la préservation de l'image des clients. Elle
                excelle dans les opérations souterraines et à ciel ouvert, de la
                conception à l'exécution, en respectant les normes
                environnementales et les procédures de gestion des déchets.
                L'entreprise possède ses propres équipements lourds et assure
                une gestion complète de chaque chantier. Sa réputation repose
                sur le respect des normes de qualité et de sécurité, ainsi que
                sur la satisfaction des clients.
              </p>
            </div>
          </div>

          {/* <div className="col-md-6">
            <div className="head-expertise">
              <img src={gasoil} alt="excavator image" />
              <p>Distribution gasoil et lubrifiant</p>
            </div>
            <div className="content-expertise">
              <p>
                Aremo Travaux Sarl excelle dans la distribution fiable et
                efficace de gasoil et de lubrifiants. L'entreprise assure la
                livraison de gasoil de haute qualité pour les véhicules, les
                équipements et les machines, répondant ainsi aux besoins en
                carburant des flottes de véhicules d'entreprise, des chantiers
                de construction et d'autres activités industrielles. Aremo
                Travaux Sarl s'engage également à fournir une gamme de
                lubrifiants performants pour diverses applications
                industrielles, assurant le bon fonctionnement et la durabilité
                des équipements. En collaborant avec des marques renommées,
                l'entreprise garantit la satisfaction des besoins spécifiques de
                ses clients. Aremo Travaux Sarl accorde une grande importance à
                la qualité de ses produits et à la fiabilité de sa distribution,
                respectant les normes environnementales et les réglementations
                en vigueur. En tant que partenaire de confiance, l'entreprise
                répond aux besoins en carburant et en lubrifiants dans divers
                secteurs industriels avec expertise et professionnalisme.
              </p>
            </div>
          </div> */}
          <div className="col-md-6">
            <div className="head-expertise">
              <img src={hand} alt="excavator image" />
              <p>Activité de négoce</p>
            </div>
            <div className="content-expertise">
              <p>
                Aremo Travaux Sarl exerce en tant qu'intermédiaire commercial,
                unissant fournisseurs et clients dans divers secteurs.
                Spécialisée dans la négociation et la fourniture de produits
                tels que matériaux de construction et pièces de rechange
                industrielles, elle répond aux demandes spécifiques des clients.
                Grâce à son réseau étendu et des processus de gestion optimisés,
                l'entreprise facilite les transactions en assurant
                communication, conditions contractuelles avantageuses et
                livraison fiable. L'accent est mis sur la qualité, le
                professionnalisme et la satisfaction des clients, faisant
                d'Aremo Travaux Sarl un partenaire commercial de confiance dans
                le négoce de divers produits et services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_Expertise;
