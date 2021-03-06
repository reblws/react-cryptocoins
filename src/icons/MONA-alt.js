import React from 'react';
import PropTypes from 'prop-types';

const MonaAlt = props => {
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
      <path d="M140.539 102.841l15.232 13.297h4.768L149 102.841zm-17.068 15.717h-20.408l-4.163-7.316-4.615 2.624 18.686 32.846 19.423-32.805-4.568-2.705-4.355 7.356zm-10.406 17.577l-6.978-12.268h14.24l-7.262 12.268zm-46.926-19.997h4.768l15.235-13.297H77.68z" />
      <path d="M113.339 0C50.689 0-.099 50.788-.099 113.438c0 62.649 50.788 113.438 113.438 113.438 62.649 0 113.438-50.789 113.438-113.438C226.777 50.788 175.988 0 113.339 0zm.002 174.109c-37.296 0-67.529-21.096-67.529-47.12 0-11.862 6.3-22.696 16.671-30.98l9.653-43.242 18.858 29.756c6.997-1.714 14.512-2.654 22.347-2.654 7.833 0 15.351.94 22.348 2.654l18.856-29.756 9.65 43.242c10.374 8.284 16.675 19.118 16.675 30.98 0 26.024-30.235 47.12-67.529 47.12z" />
    </svg>
  );
};

MonaAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MonaAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default MonaAlt;
