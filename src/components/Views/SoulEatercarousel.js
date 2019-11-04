import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './mangamodal.css';

const items = [
  {
    src: 'https://townsquare.media/site/622/files/2016/03/souleater2.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://wallpaperaccess.com/full/252286.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'http://images5.fanpop.com/image/photos/24700000/Soul-Eater-Manga-soul-eater-24716030-700-400.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const SoulEaterCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{
          display: 'flex',
          position: 'relative',
          width:'35em',
          height: '25em',
          left: '1em'
        }}src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SoulEaterCarousel;