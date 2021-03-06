import React from 'react';
import PropTypes from 'prop-types';

const AncAlt = props => {
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
      <path d="M113.389 0C50.766 0 0 50.766 0 113.388c0 62.623 50.766 113.389 113.389 113.389 62.622 0 113.388-50.766 113.388-113.389C226.777 50.766 176.011 0 113.389 0zm-.001 197.385c-23.071 0-43.966-9.303-59.146-24.359l9.05-16.431h100.349l8.979 16.347c-15.188 15.106-36.118 24.443-59.232 24.443zm33.081-72.189l8.099 14.808H72.339l8.072-14.808h66.058zm-57.012-16.592l23.931-43.893 24.007 43.893H89.457zm94.495 50.363L113.388 29.39 42.744 158.844c-8.448-13.104-13.354-28.707-13.354-45.456 0-46.391 37.607-83.999 83.998-83.999 46.391 0 83.997 37.607 83.997 83.999 0 16.803-4.935 32.451-13.433 45.579z" />
    </svg>
  );
};

AncAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AncAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default AncAlt;
