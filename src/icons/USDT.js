import React from 'react';
import PropTypes from 'prop-types';

const Usdt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M226.883 107.66c0-14.245-38.761-26.13-90.27-28.872l-.004-22.697h64.315V8.855H25.06v47.236h64.31v22.808C38.799 81.829.97 93.59.97 107.66c0 14.072 37.829 25.834 88.4 28.759v81.504h47.239V136.53c51.513-2.736 90.274-14.625 90.274-28.87zm-112.957 14.033c-55.288 0-100.109-8.557-100.109-19.119 0-8.943 32.139-16.451 75.553-18.54v5.383h.005v22.059c7.827.439 16.053.669 24.551.669 7.825 0 15.424-.199 22.688-.563v-27.63c44.355 1.961 77.423 9.548 77.423 18.622-.001 10.562-44.823 19.119-100.111 19.119z" />
    </svg>
  );
};

Usdt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Usdt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Usdt;