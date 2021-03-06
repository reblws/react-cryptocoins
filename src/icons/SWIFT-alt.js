import React from 'react';
import PropTypes from 'prop-types';

const SwiftAlt = props => {
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
        d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zM81.3 57.6l30 17.3-30 17.3V57.6zM48 76.9l30 17.3-30 17.3V76.9zm0 38.6l30 17.3-30 17.3v-34.6zm31 53.9L49 152l30-17.3v34.7zm0-38.6l-30-17.3 30-17.3v34.6zm0-38.5L49 75l30-17.3v34.6zm2.3 42.2l30 17.3-30 17.3v-34.6zm30.9 53.8l-30-17.3 30-17.3v34.6zm0-115.2l-30-17.3 30-17.3v34.6zm35.6-15.5l30 17.3-30 17.3V57.6zm0 38.6l30 17.3-30 17.3V96.2zm-33.2-57.7l30 17.3-30 17.3V38.5zm0 149.8v-34.6l30 17.3-30 17.3zm30.9-19.2l-30-17.3 30-17.3v34.6zm0-38.3l-30-17.3 30-17.3v34.6zm0-38.5l-30-17.3 30-17.3v34.6zm2.3 77.1v-34.6l30 17.3-30 17.3zm31-19.3l-30-17.3 30-17.3v34.6zm0-38.5l-30-17.3 30-17.3v34.6z"
      />
    </svg>
  );
};

SwiftAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SwiftAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SwiftAlt;
