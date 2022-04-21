import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading } from './styles';

const LoadingSpinner = ({ direction, className, color }) => (
  <StyledLoading
    data-testid="loadingSpinner"
    direction={direction}
    className={`${className} loader`}
    color={color}
  />
);

LoadingSpinner.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'gray']),
};
LoadingSpinner.defaultProps = {
  direction: 'right',
  className: '',
  color: 'white',
};

export default LoadingSpinner;
