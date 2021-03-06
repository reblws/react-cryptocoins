import React from 'react';
import PropTypes from 'prop-types';

const Kobo = props => {
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
        d="M113.4 6.4C50.8 6.4 0 54.3 0 113.4s50.8 107 113.4 107c62.6 0 113.4-47.9 113.4-107S176 6.4 113.4 6.4zm63.1 155.2H132l-33.2-51.4-2.3 51.4H57.8l5.3-104.9h39.2l-2.8 45.6 35.2-45.6h41.8l-39.6 48.8 39.6 56.1z"
      />
    </svg>
  );
};

Kobo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kobo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Kobo;
