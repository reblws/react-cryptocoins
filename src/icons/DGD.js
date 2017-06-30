import React from 'react';
import PropTypes from 'prop-types';

const Dgd = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M65.206 83.361h31.279v10.182H65.206zm77.997 46.551H70.3v37.099h72.806c10.1 0 18.96-8.457 18.96-18.665-.001-9.863-8.287-18.434-18.863-18.434z" />
      <path d="M113.33 0C50.739 0 0 50.741 0 113.331c0 62.592 50.739 113.331 113.33 113.331 62.59 0 113.33-50.739 113.33-113.331C226.66 50.741 175.92 0 113.33 0zm3.522 50.627h54.555v10.912H128.49v32.004h31.278V83.361h-21.822V72.449h33.461v32.006h-54.555V50.627zm-62.037.592h34.169v13.114H54.815V51.219zm-1.245 21.23h42.917V50.627h12.365v53.828H53.57V72.449zm91.293 108.381H55.025v-64.736h89.838c17.437 0 31.622 14.618 31.622 32.368S162.3 180.83 144.863 180.83z" />
    </svg>
  );
};

Dgd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dgd.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dgd;