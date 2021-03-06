import React from 'react';
import PropTypes from 'prop-types';

const SdcAlt = props => {
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
      <path d="M113.564 0L15.367 56.695v113.387l98.197 56.695 98.196-56.695V56.695L113.564 0zm78.221 156.726l-78.221 45.161-78.222-45.161V66.405l78.222-45.162 78.221 45.162v90.321z" />
      <path d="M52.49 76.306v12.932l90.851 51.441-29.777 17.194-40.103-23.154v-26.81L52.49 96.028v50.799l61.074 35.261 61.072-35.261v-14.714L85.294 81.582l28.27-16.322 40.101 23.153v25.028l20.971 11.885v-49.02l-61.072-35.26z" />
    </svg>
  );
};

SdcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SdcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SdcAlt;
