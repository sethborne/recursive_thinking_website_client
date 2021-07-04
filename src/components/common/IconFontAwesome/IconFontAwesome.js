import React from 'react';
import PropTypes from 'prop-types';

const IconFontAwesome = ({ iconForClassName }) => {
  return <i className={iconForClassName}></i>;
};

IconFontAwesome.propTypes = {
  iconForClassName: PropTypes.string,
};

export default IconFontAwesome;
