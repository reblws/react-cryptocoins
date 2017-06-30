import React from 'react';
import PropTypes from 'prop-types';

const Erc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      {...otherProps}
    >
      <path
        class="st0"
        d="M113.5 208.2c-39 0-72.4-23.5-86.9-57.1l12.2-4.2c12.8 28.6 41.4 48.5 74.7 48.5 37.8 0 69.5-25.6 79-60.3l-23.8 7.7c-10.5 19.7-31.3 33.2-55.2 33.2-24.8 0-46.3-14.5-56.3-35.5l23.7-8.3-4.7 24.6 150.6-49.1C223.8 47.7 174.2 0 113.5 0 50.8 0 0 50.8 0 113.5c0 5.9.5 11.8 1.3 17.5l118.6-38-6.5 22 78.3-25.7c-10.4-33.3-41.5-57.6-78.2-57.6-41.8 0-76.3 31.4-81.2 71.9L19 107.8c3-49.6 44.2-89 94.6-89 46.6 0 85.4 33.7 93.3 78.1L98.6 132.4l5.1-23.6L3.5 141.3c12.4 49.2 57 85.6 110 85.6 59.1 0 107.6-45.2 113-102.9l-19.8 6.4c-8 44.2-46.7 77.8-93.2 77.8zm0-157.2c22.2 0 41.7 11.6 52.8 29l-28.5 9.6 5.6-21.5-90 28.7C60.6 70.4 84.8 51 113.5 51z"
      />
    </svg>
  );
};

Erc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Erc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Erc;