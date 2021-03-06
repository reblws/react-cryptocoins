import React from 'react';
import PropTypes from 'prop-types';

const OpalAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      stroke={color}
      {...otherProps}
    >
      <path d="M111.046 0L65.654 26.206l45.392 26.209zm-50.25 81.45V29.035l-45.39 26.208zm0 58.318V87.354l-45.39 26.207zm0 58.319v-52.415l-45.39 26.207zM13.894 116.51v52.416l45.391-26.207zm0-58.317v52.414l45.391-26.206zm50.362-29.158V81.45l45.391-26.207zm46.79 197.742v-52.415L65.655 200.57zm-46.79-81.451v52.415l45.391-26.208zM114.679 0v52.415l45.393-26.209zm50.25 29.035V81.45l45.391-26.207zm0 58.319v52.414l45.391-26.207zm0 110.733l45.391-26.208-45.391-26.207zm46.902-29.161V116.51l-45.392 26.209zm-45.392-84.525l45.392 26.206V58.193zm-4.97-2.951V29.035l-45.391 26.208zm-46.79 145.327l45.39-26.207-45.39-26.208zm46.79-29.036v-52.415l-45.391 26.207z" />
    </svg>
  );
};

OpalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OpalAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default OpalAlt;
