import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';
import CarouselSlide from './CarouselSlide';

// Parent Component to control

const Carousel = ({ contentArr }) => {
  const [currentIndex, setCurrentIndex] = useState(5);
  const goToPrev = () => {
    currentIndex === 0 ? setCurrentIndex(contentArr.length - 1) : setCurrentIndex(currentIndex - 1);
  };
  const goToNext = () => {
    currentIndex === contentArr.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };
  const handleKeyPress = (e) => {
    console.log('event: ', e);
  };
  const renderDots = contentArr.map((item, index) => {
    let dotClass = '';
    if (index !== currentIndex) {
      dotClass = 'dot';
    } else {
      dotClass = 'dot selected';
    }
    return <li key={index} className={dotClass}></li>;
  });
  return (
    <div className="carousel">
      <button className="right-arrow" onClick={goToNext} onKeyPress={handleKeyPress}>
        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
      </button>
      )
      <div style={{ transition: 'transform ease-out 0.45s' }}>
        <CarouselSlide currentObjForSlide={contentArr[currentIndex]} />
      </div>
      <ul className="fc--disp-flex fc--jCont-ce mt-20">{renderDots}</ul>
      <button className="left-arrow" onClick={goToPrev} onKeyPress={handleKeyPress}>
        <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
      </button>
    </div>
  );
};

Carousel.prototypes = {
  contentArr: PropTypes.array,
};

export default Carousel;
