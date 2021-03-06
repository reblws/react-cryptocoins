import React from 'react';
import PropTypes from 'prop-types';

const PinkAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      stroke={color}
      {...otherProps}
    >
      <path
        className="st0"
        d="M119.4 78.6c-17.1 0-31.1 13.9-31.1 31.1 0 17.1 13.9 31.1 31.1 31.1 17.1 0 31.1-13.9 31.1-31.1 0-17.2-13.9-31.1-31.1-31.1z"
      />
      <path
        className="st0"
        d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm6 157.4c-11.9 0-22.7-4.4-31.1-11.5v33.5H71.7v-69.8c0-26.3 21.4-47.7 47.7-47.7 26.3 0 47.7 21.4 47.7 47.7.1 26.3-21.3 47.8-47.7 47.8z"
      />
    </svg>
  );
};

PinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PinkAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default PinkAlt;
