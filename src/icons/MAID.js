import React from 'react';
import PropTypes from 'prop-types';

const Maid = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M113.449.12C50.86.12.121 50.859.121 113.449c0 62.589 50.739 113.328 113.328 113.328 62.589 0 113.328-50.739 113.328-113.328C226.777 50.859 176.038.12 113.449.12zm21.229 177.059c-16.422-9.68-72.338-42.744-81.204-49.506-9.706-7.397-8.895-26.978-8.74-29.616l75.861 44.998-.037-36.71 14.12-8.385v79.219zm27.98-28.424c0 18.669-21.938 30.333-23.292 31.034V89.722l-30.16 17.766-14.462-8.318 67.914-38.207v87.792zm0-93.165l-77.39 43.53 30.623 17.695.014 18.011-66.846-39.653 69.616-41.547c26.153-15.615 43.982 1.953 43.982 1.953v.011z" />
    </svg>
  );
};

Maid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Maid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Maid;