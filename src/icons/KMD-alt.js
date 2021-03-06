import React from 'react';
import PropTypes from 'prop-types';

const KmdAlt = props => {
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
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zm54.991 164.274l-3.878 3.878c-17.035 7.13-34.055 14.299-51.113 21.374-17.058-7.074-34.078-14.243-51.113-21.374l-3.878-3.878-21.142-50.879 21.142-50.879 3.878-3.878c11.93-4.994 23.858-9.997 35.792-14.982l9.842-4.12 2.725-1.13 2.754-1.141 2.753 1.141 2.725 1.13 9.842 4.12c11.934 4.985 23.862 9.988 35.792 14.982l3.878 3.878 21.142 50.879-21.141 50.879z" />
      <path d="M113.4 68.322L81.528 81.524l-13.202 31.871 13.202 31.872 31.872 13.202 31.871-13.202 13.202-31.872-13.202-31.871L113.4 68.322zm22.536 67.61l-22.537 9.336-22.536-9.336-9.335-22.536 9.335-22.536 22.536-9.336 22.537 9.336 9.335 22.536-9.335 22.536z" />
    </svg>
  );
};

KmdAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KmdAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default KmdAlt;
