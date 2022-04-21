// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';
import { StyledButton } from '../../Button/src/styles';

export const StyledAlertWrapper = Styled.div`
  background: ${props => color(props.bgColor, props.bgShade)(props)};
  color: ${props => color(props.color, props.colorShade)(props)};
  font-size: 1.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${props =>
  color(props.color, props.colorShade)(props)};
  padding: 0.8rem 1.6rem;
`;

export const StyledCloseButton = Styled(StyledButton)`
  position: relative;
  left: -1.1rem;
  top:0.4rem;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${color('gray', 'dark')} !important;
  }
`;
