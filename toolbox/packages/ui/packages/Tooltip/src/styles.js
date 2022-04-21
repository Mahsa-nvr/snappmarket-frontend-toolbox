// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color, makeRgbaColor } from '@snappmarket/helpers';

export const StyledTooltipWrapper = Styled.span`
  position: relative;
  display: inline-block;
  &.focus-trigger {
    &:focus {
      > span:last-child {
        opacity: 1;
      }
    }
  }
  &.hover-trigger {
    &:hover {
      > span:last-child {
        opacity: 1;
      }
    }
  }
`;
export const StyledTooltip = Styled.span`
  position: absolute;
  z-index: 999;
  background-color: ${color('white')};
  color: ${color('black')};
  width: max-content;
  border-radius: 0.5rem;
  opacity: 0;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 16%);
  padding: 5.7px 8px;
  border: solid 0.5px ${color('gray', 'main')};
  transition: all 0.3s ease 0.1s;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.7rem;
    border-color: ${color('white')} transparent transparent ${color('white')};
    filter: drop-shadow(-0.2rem -0.2rem 0.2rem rgb(0 0 0 / 16%));
  }
  ${props =>
  props.position === 'top' &&
  `
    left: 50%;
    top: -1rem;
    transform: translate(-50%, -100%);
    &:after {
      left: 50%;
      bottom: -6px;
      transform: rotate(-135deg);
      border-radius: 0.3rem 0rem 0rem 0rem;
    }
  `}
  ${props =>
  props.position === 'bottom' &&
  `
    left: 50%;
    bottom: -1rem;
    transform: translate(-50%, 100%);
    &:after {
      border-bottom-color: ${color('white')(props)};
      border-top: none;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
  ${props =>
  props.position === 'left' &&
  `
    left: -1rem;
    top: 50%;
    transform: translate(-100%, -50%);
    &:after {
      border-left-color: ${color('white')(props)};
      border-right: none;
      top: 50%;
      left: 100%;
      transform: translate(0, -50%);
    }
  `}
  ${props =>
  props.position === 'right' &&
  `
    right: -1rem;
    top: 50%;
    transform: translate(100%, -50%);
    &:after {
      border-right-color: ${color('white')(props)};
      border-left: none;
      top: 50%;
      right: 100%;
      transform: translate(0, -50%);
    }
   `}
`;
