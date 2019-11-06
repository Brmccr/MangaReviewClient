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
    src: 'https://www.syfy.com/sites/syfy/files/styles/1170xauto/public/berserk-1592562.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: 'https://i2.mangareader.net/berserk/21/berserk-1592268.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://i8.mangareader.net/berserk/26/berserk-1592741.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://goboiano.com/wp-content/uploads/2017/06/Berserk-2.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'https://miro.medium.com/max/2800/0*uwFT6-DYRMlaVsan.',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: 'http://images6.fanpop.com/image/photos/42600000/berserk-guts-berserk-the-anime-manga-42694808-1000-580.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const Example = (props) => {
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
        }} src={item.src} alt={item.altText} />
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

export default Example;