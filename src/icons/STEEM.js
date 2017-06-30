import React from 'react';
import PropTypes from 'prop-types';

const Steem = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      {...otherProps}
    >
      <path
        class="st0"
        d="M37.1 24.5C34.8 23.4 6.4 46.9 6.4 64.2c0 23.6 33.2 77.2 38.8 97.9 4.8 17.8-8.2 39.1-4.6 40.1 3.3 2.1 34.3-29.3 35.5-42.7C77.7 138.2 39.9 76 36.9 60c-3.6-18.7 2.7-35.1.2-35.5zM108.1 0c-2.9-1.4-39.2 28.5-39.2 50.6 0 30.2 42.3 98.5 49.5 124.9 6.1 22.7-10.4 49.9-5.9 51.1 4.2 2.7 43.7-37.3 45.2-54.4 2-27.2-46.2-106.4-50-126.9-4.4-23.8 3.6-44.7.4-45.3zM181.4 24.5c-2.2-1.1-30.7 22.4-30.7 39.7 0 23.6 33.2 77.2 38.8 97.9 4.8 17.8-8.2 39.1-4.6 40.1 3.3 2.1 34.3-29.3 35.5-42.7C222 138.2 184.2 76 181.2 60c-3.5-18.7 2.7-35.1.2-35.5z"
      />
    </svg>
  );
};

Steem.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Steem.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Steem;