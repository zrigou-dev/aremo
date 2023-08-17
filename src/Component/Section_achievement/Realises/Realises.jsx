import React, {useState} from "react";
import "./Realises.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Realises = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  const data = [
    {
      date: "2014-2017",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux d'excavation chargement-minerai à la mine et transport PB à l'usine",
      lieu: "Mine de Tamarawt",
    },
    {
      date: "07/01/2015",
      maitre: "Crimidesa Maroc SA",
      Nature: "Travaux d'élargissement et entretien de 11 Km de piste",
      lieu: "Accès vers La mine-Crimidesa Maroc",
    },
    {
      date: "07/01/2015",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux de construction et aménagement de piste:-Réalisation de trois pistes d'accès au ...",
      lieu: "Accès vers La mine-Crimidesa Maroc ",
    },
    {
      date: "07/01/2015",
      maitre: "Crimidesa Maroc SA",
      Nature: "Transport du produit fini",
      lieu: "De l'usine crimidesa Taroudant vers Berrechid et Settat",
    },
    {
      date: "07/01/2015",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux à la Carrière d'extraction :-Excavation, chargement de minerai et préparation des niveaux...",
      lieu: "Usine Crimidesa-Taroudant",
    },
    {
      date: "13/10/2015",
      maitre: "province Guelmim  Marché N°01/2015",
      Nature: " Travaux d'alimentation en eau potable ",
      lieu: "Dr Tajanate CR d'Asrir ",
    },
    {
      date: "04/01/2016",
      maitre: "Groupo Crimidesa Maroc",
      Nature: "Travaux d'aménagement et construction d'un hangar 500m2",
      lieu: "Usine Crimidesa-Taroudant",
    },
    {
      date: "04/01/2016",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux d'exploitation à la mine zone A et B -Chargement minerai- Excavation minerai-Excavation...",
      lieu: " La mine-Crimidesa Maroc",
    },
    {
      date: "20/01/2016",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux Miniers :-Travaux d'excavation de minerai -Travaux d'ouverture de nouvelles pistes...",
      lieu: "La mine-Crimidesa Maroc ",
    },
    {
      date: "20/01/2016",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux de Soudure:-confection et fabrication des pièces d'usure pour la station de concassage... ",
      lieu: "Usine Crimidesa-Taroudant",
    },
    {
      date: "02/01/2017",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux de réalisation d'un Réservoir d'eau-Installation conduite et moyens de pompage",
      lieu: "Usine Crimidesa-Taroudant",
    },
    {
      date: "02/01/2017",
      maitre: "Crimidesa Maroc SA",
      Nature: "Travaux d'élargissement et entretien piste",
      lieu: "Accès vers La mine-Crimidesa Maroc ",
    },
    {
      date: "02/01/2017",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux d'exploitation à la mine zone A et B -Chargement minerai- Excavation minerai-Excavation stéri...",
      lieu: "La mine-Crimidesa Maroc ",
    },
    {
      date: "16/01/2017",
      maitre: "Sté SMIAM Sarl",
      Nature:
        "Sous-traitance partielle des Travaux d’ouverture de la piste Reliant le Village Anfgo-Province de Midelt...",
      lieu: "Douar Anfgao/Douar Aghadou-Prov Midelt",
    },
    {
      date: "11/11/2017",
      maitre: "CT-Imaouen/ Caïdat Ighrem-Taroudant...",
      Nature:
        "Travaux d'alimentation en eau potable (Terrassement, Construction, canalisation...)",
      lieu: "Dr AGUERD N'OUALOUSS relevant de la commune...",
    },
    {
      date: "07/01/2017",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux d'exploitation à la mine zone A et B -Chargement minerai- Excavation minerai-Excavation sté...",
      lieu: "La mine-Crimidesa Maroc ",
    },
    {
      date: "13/06/2017",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux de soudure et  chaudronnerie: -confection et fabrication des pièces d'usure po...",
      lieu: "Usine Crimidesa-Taroudant",
    },
    {
      date: "13/06/2017",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux à la mine : Excavation de minerai -Ouverture de nouvelles pistes et accès à la mine -Excavat...",
      lieu: "Accès vers La mine-Crimidesa Maroc ",
    },
    {
      date: "07/06/2017",
      maitre: "Province de Taroudant Marché N°01/2015",
      Nature:
        "Travaux d'approvisionnement en eau potable-Equipement de deux stations et clôture des cimetières",
      lieu: "Dr Ait Taleb et Asgoune/Dr Aguerd Noualous et Azoura/Dr Tagadirte Nait Ali",
    },
    {
      date: "02/01/2018",
      maitre: "Groupo Crimidesa Maroc",
      Nature: "Travaux de creusement et équipement d'un puits d'eau potable",
      lieu: "Usine Crimidesa-Taroudant",
    },
    {
      date: "09/07/2018",
      maitre: "Wilaya d'Agadir-",
      Nature:
        "Marché 09/2018/INDH (projet encours) : Travaux de construction de Trois citernes d'eau de...",
      lieu: "La commune Territoriale d'Aziar, Préfecture d’Agadir Ida Outanane (INDH).",
    },
    {
      date: "28/11/2018",
      maitre: "Wilaya d'Agadir-",
      Nature:
        "Bon de Commande N°48 -  Objet: Travaux de réalisation d'une chaussée  bétonnée aux douars...",
      lieu: "Mr le Wali de la région Souss Massa   et le Gouverneur...",
    },
    {
      date: "16/11/2017",
      maitre: "Morocco Mining Investment",
      Nature: "Ouverture de la piste vers le Permis Minier N° 2339029",
      lieu: "Qelaat Mgouna-Tinghir",
    },
    {
      date: "01/06/2020",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux d'élargissement de la piste enter RP 2717 et la mine de Tamarawt",
      lieu: "Accès vers La mine-Crimidesa Maroc ",
    },
    {
      date: "2018-2021",
      maitre: "Crimidesa Maroc SA",
      Nature:
        "Travaux préparatoire accès-piste -plates-formes à la mine, excavation chargement-minerai à la mine...",
      lieu: "Mine de Tamarawt",
    },
    {
      date: "15/03/2022",
      maitre: "SGC",
      Nature:
        "Travaux de terrassement Pistes et plates-formes: Marché des travaux du « PARC EOLIEN ESSAOUIRA »...",
      lieu: "Parc Eolien d'Essaouira",
    },
  ];

  return (
    <div className="realises">
      <div 
      className="container"
      onMouseEnter={() => setAutoplayEnabled(false)} 
      onMouseLeave={() => setAutoplayEnabled(true)} 
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          autoplay={
            autoplayEnabled
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                }
              : false
          }
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((el) => {
            return (
              <SwiperSlide className="slid">
                <div>
                  <h3>
                    {el.lieu}, <span>{el.date}</span>
                  </h3>
                  <h5>{el.maitre}</h5>
                </div>
                <p>{el.Nature}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Realises;
