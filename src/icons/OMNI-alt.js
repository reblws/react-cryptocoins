import React from 'react';
import PropTypes from 'prop-types';

const OmniAlt = props => {
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
      <path d="M113.39 62.245c-28.2 0-51.144 22.942-51.144 51.144 0 28.199 22.944 51.143 51.144 51.143s51.144-22.943 51.144-51.143c0-28.202-22.943-51.144-51.144-51.144z" />
      <path d="M113.389 0C50.767 0 .001 50.766.001 113.388c0 62.623 50.766 113.389 113.389 113.389s113.388-50.766 113.388-113.389C226.777 50.766 176.012 0 113.389 0zm63.61 49.478v21.82a76.67 76.67 0 0 0-21.979-21.82h21.979zm-127.611 0h22.374a76.658 76.658 0 0 0-22.374 22.421V49.478zm0 127.61v-22.211a76.664 76.664 0 0 0 22.053 22.211H49.388zm127.611 0h-21.658a76.703 76.703 0 0 0 21.658-21.609v21.609zm-63.609 6.436c-38.673 0-70.137-31.463-70.137-70.136s31.464-70.137 70.137-70.137 70.137 31.464 70.137 70.137-31.464 70.136-70.137 70.136z" />
    </svg>
  );
};

OmniAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OmniAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default OmniAlt;
