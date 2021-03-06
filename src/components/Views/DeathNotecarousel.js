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
    src: 'https://i.stack.imgur.com/Qafwh.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://qph.fs.quoracdn.net/main-qimg-446b226a7af56a11bea32ba7133337b7.webp',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://www.rightstufanime.com/images/productImages/9781421501680_manga-death-note-1-sample1.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const DeathNoteCarousel = (props) => {
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

export default DeathNoteCarousel;