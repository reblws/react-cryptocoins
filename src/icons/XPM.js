import React from 'react';
import PropTypes from 'prop-types';

const Xpm = props => {
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
      <path d="M113.379 0C50.761 0 0 50.761 0 113.377c0 62.617 50.761 113.379 113.379 113.379 62.616 0 113.377-50.763 113.377-113.379C226.757 50.761 175.995 0 113.379 0zm53.008 113.145c0 29.39-22.699 39.381-41.806 39.381v7.662h14.742v10.377h-14.742v11.933h-23.053v-11.933H87.433v-10.377h14.063v-7.759c-6.111 0-41.125-1.456-41.125-41.418V62.903h22.891v49.952c0 20.854 18.331 20.659 18.331 20.659V62.903h22.988v70.611s18.914 1.066 18.914-20.949V62.903h22.892v50.242z" />
    </svg>
  );
};

Xpm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xpm.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xpm;
