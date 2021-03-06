import React from 'react';
import PropTypes from 'prop-types';

const Emc = props => {
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
      <path d="M168.53 15.763H56.781L0 113.389l56.781 97.625h112.64l57.567-97.96-58.458-97.291zm-11.351 173.862H69.083l-44.339-76.236 44.339-76.235h87.343l45.679 76.022-44.926 76.449z" />
      <path d="M71.571 88.983h32.084v15.357H71.571v18.098h50.184V88.983H136.7v47.028H71.571v18.099H154.8V70.882H71.571z" />
    </svg>
  );
};

Emc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Emc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Emc;
