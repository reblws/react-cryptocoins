import React from 'react';
import PropTypes from 'prop-types';

const Pink = props => {
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
        d="M116.6 0C65.8 0 24.5 41.3 24.5 92.1v134.6h32.2V162c16.1 13.8 37.1 22.2 59.9 22.2 50.8 0 92.1-41.3 92.1-92.1S167.4 0 116.6 0zm0 152.1c-33.1 0-59.9-26.9-59.9-59.9s26.9-59.9 59.9-59.9 59.9 26.9 59.9 59.9-26.8 59.9-59.9 59.9z"
      />
    </svg>
  );
};

Pink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pink.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pink;
