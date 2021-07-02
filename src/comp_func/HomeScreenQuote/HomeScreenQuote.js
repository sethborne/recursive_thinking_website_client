import React from 'react';
import './HomeScreenQuote.css';
import { PUBLIC_S3_URL } from '../../standards/publicPaths.mjs';

const HomeScreenQuote = ({ data: userObj }) => {
  const IMAGE_PATH = `${PUBLIC_S3_URL}${userObj._userQuoted}/avatar/${userObj.avatar}`;
  const ALT = `Image of ${userObj.name}`;
  return (
    <section className="homescreen-quote">
      <figure>
        <img src={`${IMAGE_PATH}`} alt={ALT} className="avatar-M" />
      </figure>
      <h3 className="fs-30 fw-500 ls-20 mt-40">{userObj.title}</h3>
      <p className="fs-20 fw-300 ls-14 mt-15">{userObj.quote}</p>
    </section>
  );
};

export default HomeScreenQuote;
