import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='imgCarousel'>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientobarra.jpg"
          alt="First slide"
        />
        
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="img/entrenamientoBasquet.jpg"
          alt="Second slide"
        />
          <Carousel.Caption>
          
          
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientoPadle.jpg"
          alt="Third slide"
        />
        

        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientoVoley.jpg"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientoPesarusa.jpg"
          alt="Third slide"
        />
      
        <Carousel.Caption>
          
          <p className='carouselText'>
            Inspirate, transforma tu vida, adquiri el habito deportivo...
          </p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}
