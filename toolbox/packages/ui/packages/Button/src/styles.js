// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {
  defineForegroundColor,
  getNextProp,
  makeRgbaColor,
  color,
} from '@snappmarket/helpers';

export const StyledButton = Styled.button`
  background: none;
  border-radius: 0.5rem;
  font-family: ${props => props.theme.defaultFont};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  overflow: hidden;
  vertical-align: middle;
  letter-spacing: 0;
  cursor: pointer;
  outline: none;
  border: none;
  padding: ${props => props.noPadding ? '0' : '0 1rem'} ;
  height: ${props => `${props.height}rem`};
  font-size: ${props => `${props.fontSize}rem`};
  min-width: ${props =>
    props.fullWidth ? '100%' : `${props.minWidth}rem`};
  flex-direction: ${props =>
    props.direction === 'right' ? 'row' : 'row-reverse'};
  svg {
    max-height: ${props => `${props.height}rem`};
  }
`;

export const StyledLabel = Styled.span`
  font-family: ${props => props.theme.defaultFont};
  border-radius: 1rem;
  font-size: 1.1rem;
  padding: ${props => props.noPadding ? '0' : '0.2rem 0.8rem'} ;
  background: ${props => props.color == 'transparent' ? 'transparent' :
    makeRgbaColor(
      0.25,
      defineForegroundColor(`${color(props.color, 'dark')(props)}`),
    )};
`;

/* eslint-disable indent */
export const StyledPrimaryButton = Styled(StyledButton)`
  background-color: ${props => color(props.color, props.shade)(props)};
  border: none;
  color: ${props =>
    color(defineForegroundColor(`${color(props.color, props.shade)(props)}`))};
  svg {
    fill: ${props =>
      color(
        defineForegroundColor(`${color(props.color, props.shade)(props)}`),
      )};
  }
  &:hover,
  &:active {
    background-color: ${props =>
      getNextProp(props.theme.colors[props.color], props.shade)};  }
  &:focus,
  &:active {
    box-shadow: 0 0 1rem -0.1rem ${props =>
  makeRgbaColor(0.5, props.color, props.shade)(props)};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${props => color(props.color, 'ultra-light')(props)} !important;
    color: ${props =>
      color(defineForegroundColor(`${color(props.color, 'dark')}`))};
    svg {
      fill: ${props =>
        color(defineForegroundColor(`${color(props.color, 'dark')}`))};
    }
  }
`;

export const StyledOutlineButton = Styled(StyledPrimaryButton)`
  background: none;
  border: 0.1rem solid ${props => color(props.color, props.shade)(props)};
  color: ${props => color(props.color, props.shade)(props)};
  svg {
    fill: ${props => color(props.color, props.shade)(props)};
  }
  &:hover,
  &:active {
    color: ${props =>
      color(
        defineForegroundColor(`${color(props.color, props.shade)(props)}`),
      )};
    svg {
      fill: ${props =>
        color(
          defineForegroundColor(`${color(props.color, props.shade)(props)}`),
        )};
    }
  }
  &:disabled {
    background: none !important;
    border-color: ${color('gray', 'main')};
    color: ${color('gray', 'dark')};
  }
`;
/* eslint-enable indent */

export const StyledLinkButton = Styled(StyledOutlineButton)`
  &,
  &:hover,
  &:active,
  &:focus {
    border-color: transparent;
    background: none;
    box-shadow: unset;
    color: ${props => color(props.color, props.shade)(props)};
    svg {
      fill: ${props => color(props.color, props.shade)(props)};
    }
  }
  &:disabled {
    color: ${color('gray', 'light')};
    border: none;
    svg {
      fill: ${color('gray', 'light')};
    }
  }
`;
