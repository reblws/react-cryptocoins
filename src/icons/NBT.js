import React from 'react';
import PropTypes from 'prop-types';

const Nbt = props => {
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
      <path d="M206.55 48.882l-41.694 134.989-11.344-36.633 36.344-117.493a115.308 115.308 0 0 0-4.811-4.163l-34.663 111.542-11.348-36.656 27.251-87.35C150.477 4.746 132.458 0 113.327 0 50.738 0 0 50.739 0 113.327c0 24.447 7.741 47.085 20.904 65.598L61.171 45.9l11.411 36.852-34.819 115.026a115.636 115.636 0 0 0 4.718 3.999L75.579 92.435l11.409 36.851-25.655 84.759c15.572 8.056 33.251 12.61 51.994 12.61 62.59 0 113.329-50.738 113.329-113.328 0-23.942-7.433-46.149-20.106-64.445zm-89.824 136.283c-5.41 0-9.448-3.646-10.656-7.595-1.206-3.948-41.484-134.963-41.484-134.963l15.182.002c4.324 0 8.168 2.56 9.311 6.172C90.222 52.393 131 185.165 131 185.165h-14.274zm28.791-.03c-5.137 0-9.722-3.924-11.203-8.922-1.483-4.999-40.443-133.605-40.443-133.605h14.687c4.88 0 8.723 2.821 9.982 6.941 1.256 4.121 41.041 135.591 41.041 135.591s-8.926-.005-14.064-.005z" />
    </svg>
  );
};

Nbt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Nbt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Nbt;
