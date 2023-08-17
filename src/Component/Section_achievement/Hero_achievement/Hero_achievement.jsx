import React, { useState } from 'react';
import './Hero_achievement.css'
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../../Assets/img_achievement/Slide1.png'
import Slide2 from '../../../Assets/img_achievement/Slide2.png'
import Slide3 from '../../../Assets/img_achievement/Slide3.png'
import Slide4 from '../../../Assets/img_achievement/Slide4.png'
import Slide5 from '../../../Assets/img_achievement/Slide5.png'
import Slide6 from '../../../Assets/img_achievement/Slide6.png'
import Slide7 from '../../../Assets/img_achievement/Slide7.png'
import Slide8 from '../../../Assets/img_achievement/Slide8.png'
import Slide9 from '../../../Assets/img_achievement/Slide9.png'
import Slide10 from '../../../Assets/img_achievement/Slide10.png'
import Slide11 from '../../../Assets/img_achievement/Slide11.png'
import Slide12 from '../../../Assets/img_achievement/Slide12.png'
import Slide13 from '../../../Assets/img_achievement/Slide13.png'
import Slide14 from '../../../Assets/img_achievement/Slide14.png'
import Slide15 from '../../../Assets/img_achievement/Slide15.png'
import prev from '../../../Assets/img_achievement/Prev.svg'
import next from '../../../Assets/img_achievement/next.svg'



const Hero_achievement = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  


    const items = [
        
        {
          src: Slide3,
          alt: 'Slide 3',
        },
        {
          src: Slide4,
          alt: 'Slide 4',
        },
        {
          src: Slide5,
          alt: 'Slide 5',
        },
        {
          src: Slide1,
          alt: 'Slide 1',
        },
        {
          src: Slide2,
          alt: 'Slide 2',
        },
        {
          src: Slide6,
          alt: 'Slide 6',
        },
        {
          src: Slide7,
          alt: 'Slide 7',
        },
        {
          src: Slide8,
          alt: 'Slide 8',
        },
        {
          src: Slide9,
          alt: 'Slide 9',
        },
        {
          src: Slide10,
          alt: 'Slide 10',
        },
        {
          src: Slide11,
          alt: 'Slide 11',
        },
        {
          src: Slide12,
          alt: 'Slide 12',
        },
        {
          src: Slide13,
          alt: 'Slide 13',
        },
        {
          src: Slide14,
          alt: 'Slide 14',
        },
        {
          src: Slide15,
          alt: 'Slide 15',
        },
      ];
  return (
    <div className="hero-achievement">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-hero-achievement">
            <h2>AREMO TRAVAUX</h2>
            <h3>Réalisation</h3>
            <p>
              Aremo Travaux Sarl est une entreprise spécialisée dans les travaux
              de construction et travaux divers. Grâce à son équipe qualifiée et
              expérimentée, elle réalise avec succès une grande variété de
              projets de construction, incluant des bâtiments résidentiels,
              commerciaux, industriels et des infrastructures. L'entreprise
              offre des solutions sur mesure pour les nouvelles constructions,
              les rénovations et les aménagements, en respectant les délais,
            </p>
          </div>
          <div className="col-md-6 slid-imgs">
            <div className='slid-achievement'>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
              > 
                {items.map((item, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block handel-img-slid"
                      src={item.src}
                      alt={item.alt}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <button onClick={handlePrev} className='prev-achievement'><img src={prev} alt="prev icon" /></button>
              <button onClick={handleNext} className='next-achievement'>
                <img src={next} alt="next icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {items.map((item)=>{
        (<img src={item.src} alt={item.alt} /> )
      })}
    </div>
  );
};

export default Hero_achievement;
