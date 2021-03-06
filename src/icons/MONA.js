import React from 'react';
import PropTypes from 'prop-types';

const Mona = props => {
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
      <path d="M112.951 149.841l12.2-20.604h-23.92z" />
      <path d="M198.826 82.449L182.615 9.823l-31.669 49.976c-11.752-2.878-24.376-4.459-37.532-4.459-13.159 0-25.78 1.581-37.532 4.459L44.21 9.823 27.999 82.449C10.58 96.361 0 114.556 0 134.479c0 43.707 50.775 79.139 113.414 79.139 62.637 0 113.414-35.432 113.414-79.139 0-19.923-10.581-38.118-28.002-52.03zM50.348 115.714h-7.619l18.443-21.25h13.521l-24.345 21.25zm62.447 51.892L81.412 112.44l7.749-4.408 6.992 12.287h34.276l7.314-12.354 7.672 4.544-32.62 55.097zm63.683-51.892l-24.343-21.25h13.521l18.439 21.25h-7.617z" />
    </svg>
  );
};

Mona.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mona.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mona;
