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
          
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="img/entrenamientoBasquet.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientoPesarusa.jpg"
          alt="Third slide"
        />
        

        <Carousel.Caption>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientoBoxeo.jpg"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="img/entrenamientoPadle.jpg"
          alt="Third slide"
        />
      
        <Carousel.Caption>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}
