import React from 'react';
import PropTypes from 'prop-types';

const ZeitAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M113.388.001C50.766.001 0 50.767 0 113.389c0 62.623 50.766 113.388 113.388 113.388 62.623 0 113.389-50.765 113.389-113.388C226.777 50.767 176.01.001 113.388.001zm55.273 58.117c10.684 10.684 17.622 23.692 20.829 37.397l-30.091 30.089-.127-75.504a78.731 78.731 0 0 1 9.389 8.018zm-55.274-22.895c15.111 0 29.215 4.291 41.173 11.717v42.552L101.081 36.19a78.63 78.63 0 0 1 12.306-.967zm22.946 97.083c-.743-2.014-6.042-1.166-6.995-2.755-.955-1.591-3.921-4.663-8.479-5.405-4.558-.743-6.888 2.438-9.325.742-2.438-1.696.847-3.181-2.438-3.922-3.287-.741.104-5.087-2.333-3.391-2.437 1.695-4.239 1.588-4.239-1.379 0-2.966 3.816-5.299 6.572-4.132 2.754 1.166 4.132 2.755 2.967 3.71-1.165.953.53 2.437 2.438 3.283 1.907.85 5.723 1.38 4.557.105-1.165-1.27-5.193-.952-5.086-2.542.105-1.59-2.014-5.086-.584-6.041 1.431-.955 3.974-5.829 6.201-6.358 2.226-.531.213-2.651 2.12-2.437 1.906.21 4.662.182 4.874-.703.212-.888 3.18.596 3.286-.994.105-1.589-3.18-5.299-3.498-7.312-.317-2.014 1.377-5.829.954-7.418-.423-1.591-5.829-5.3-3.921-6.465 1.907-1.166 6.146 1.165 6.676 3.074.53 1.906 2.119 10.597 4.133 9.854 2.014-.742 1.062-4.021 3.075-3.97 1.394.035 2.379-.971 2.503-2.228a38.407 38.407 0 0 1 8.786 12.576c-.872-.938-1.649-1.468-2.176-1.292-1.622.541.529 3.923 1.271 4.982.743 1.059 1.908 2.542 1.061 2.861-.848.318-1.613 1.696-1.283 3.179.33 1.484.436 5.179-.942 6.299-1.378 1.119-3.285 6.208-1.695 8.537 1.59 2.334 2.605.425 4.218 1.062.561.22.782.673.898 1.132-4.228 13.366-15.587 23.554-29.609 26.114.908-.997 1.682-2.808 2.874-3.508 1.803-1.061 5.298-5.724 7.205-6.678 1.905-.95 6.676-6.566 5.934-8.58zM86.099 90.763c1.589 0 3.178-5.505 5.404-2.17s-.742 3.971-.317 5.667c.424 1.696 2.309 3.814.518 6.676-1.79 2.862-.518 9.326 3.297 13.299 3.814 3.976 1.031 4.399 6.08 6.307 5.047 1.906 5.683 1.802 7.062 2.756 1.378.953 1.166 2.438 2.967 2.966 1.801.53 3.285 1.696 2.278 3.076-1.005 1.375-2.914 3.707-.211 6.676 2.703 2.967 5.14 3.392 4.611 7.632-.47 3.738-.769 6.747.405 7.761-1.574.196-3.177.3-4.805.3-21.162 0-38.318-17.156-38.318-38.319 0-10.208 3.993-19.483 10.5-26.351-.257 1.762-.347 3.724.529 3.724zm8.75-10.914a38.143 38.143 0 0 1 18.538-4.778c1.853 0 3.676.137 5.459.39-5.937 1.28-13.014 4.282-15.05 4.282-1.398-.001-5.201-.278-8.947.106zM58.115 58.118C68.8 47.433 81.808 40.495 95.513 37.289l30.088 30.089-75.504.126a79.076 79.076 0 0 1 8.018-9.386zM35.222 113.39c0-15.111 4.292-29.216 11.715-41.172h42.554l-53.302 53.478a78.75 78.75 0 0 1-.967-12.306zm22.894 55.271c-10.684-10.684-17.624-23.691-20.828-37.396l30.089-30.09.126 75.505a78.815 78.815 0 0 1-9.387-8.019zm55.274 22.894c-15.111 0-29.217-4.29-41.173-11.716v-42.553l53.48 53.302c-4.011.636-8.12.966-12.307.967zm55.271-22.894c-10.686 10.685-23.692 17.623-37.397 20.829l-30.09-30.09 75.506-.125a79.072 79.072 0 0 1-8.019 9.386zm11.178-14.1h-42.552l53.301-53.479c.634 4.009.966 8.118.967 12.307-.002 15.11-4.292 29.216-11.716 41.172z" />
    </svg>
  );
};

ZeitAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZeitAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ZeitAlt;