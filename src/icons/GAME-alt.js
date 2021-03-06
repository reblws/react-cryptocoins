import React from 'react';
import PropTypes from 'prop-types';

const GameAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 123.305 595.279 595.28"
      stroke={color}
      {...otherProps}
    >
      <path d="M296.979 324.193c45.862 0 84.316 32.218 93.982 75.204h32.392c-10.11-60.633-62.916-107.007-126.374-107.007-70.663 0-128.15 57.484-128.15 128.15 0 70.657 57.487 128.146 128.15 128.146 38.923 0 73.824-17.465 97.347-44.951v45.771h31.803V436.981H313.601v31.803h66.723c-16.695 28.728-47.792 48.105-83.344 48.105-53.127 0-96.347-43.226-96.347-96.349-.001-53.127 43.219-96.347 96.346-96.347z" />
      <path d="M297.64 123.421C133.323 123.421.116 256.628.116 420.945c0 164.316 133.207 297.523 297.524 297.523s297.523-133.207 297.523-297.523c0-164.318-133.206-297.524-297.523-297.524zm172.318 470.011h-172.48c-95.26 0-172.48-77.226-172.48-172.484 0-95.263 77.221-172.483 172.48-172.483s172.48 77.22 172.48 172.483v172.484z" />
    </svg>
  );
};

GameAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GameAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default GameAlt;
