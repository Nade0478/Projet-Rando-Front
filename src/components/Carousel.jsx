import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselImage from './CarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [
    '/public/Assets/Images/Home/nature1.jpg',
    '/public/Assets/Images/Home/nature2.jpg',
    '/public/Assets/Images/Home/nature3.jpg',
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem>
        <CarouselImage images={images} />
        <CarouselCaption>
          <h3>Sentier Forêt</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage images={images} />
        <CarouselCaption>
          <h3>Sentier et randonneurs</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <CarouselImage images={images} />
        <CarouselCaption>
          <h3>Sentier</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
}

export default ControlledCarousel;
