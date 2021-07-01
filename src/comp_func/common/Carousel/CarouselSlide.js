import React from 'react';
import PropTypes from 'prop-types';

import './CarouselSlide.css';

import { HomeScreenQuote } from '../../../standards/dictionaryForModels';
import { PUBLIC_S3_URL } from '../../../standards/publicPaths.mjs';

const CarouselSlide = ({ currentObjForSlide }) => {
  const { avatar, title, name, quote, _userQuoted } = HomeScreenQuote;
  const SRC = `${PUBLIC_S3_URL}${currentObjForSlide[_userQuoted]}/avatar/${currentObjForSlide[avatar]}`;
  const ALT = `Avatar of ${name}`;
  return (
    <div className="carousel-slide">
      <div className="slide">
        <div className="fc-row fc-col-1of3">
          <div className="fi-cell">
            <figure className="carousel-slide-user-avatar">
              <img className="avatar-XL avatar-BS" src={SRC} alt={ALT} />
            </figure>
          </div>
          <div className="fi-cell">
            <div className="carousel-slide-user-quote">
              <p className="fc-White fs-26 fw-100 ls-16">{currentObjForSlide[quote]}</p>
              <br />
              <p className="fc-White fs-33 fw-300 ls-22">
                {currentObjForSlide[name]}, {currentObjForSlide[title]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CarouselSlide.prototype = {
  currentObjForSlide: PropTypes.object,
};

export default CarouselSlide;
