import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { StyledTooltipWrapper, StyledTooltip } from './styles';

const Tooltip = props => {
  const { className, position, content, children, trigger, ...rest } = props;

  return (
    <StyledTooltipWrapper tabIndex="99" data-testid="tooltipWrapper" className={classNames(className, {
      "hover-trigger": trigger === "hover",
      "focus-trigger": trigger === "focus",
    })} {...rest}>
      {children}
      {!!content && <StyledTooltip data-testid="tooltip" position={position}>
        {content}
      </StyledTooltip>
      }
    </StyledTooltipWrapper>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  trigger: PropTypes.oneOf(['hover', 'focus']),
  content: PropTypes.node,
  children: PropTypes.node,
};
Tooltip.defaultProps = {
  className: '',
  position: 'top',
  trigger: 'hover',
};

export default Tooltip;
