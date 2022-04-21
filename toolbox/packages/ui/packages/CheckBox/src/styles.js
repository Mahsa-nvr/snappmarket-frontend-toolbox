// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

export const StyledCheckboxWrapper = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => `${props.size}rem`};
  height: ${props => `${props.size}rem`};
  padding: 0.3rem;
  color: ${color('white')};
  border-radius: 0.2rem;
  border-width: 0.1rem;
  border-style: solid;
  transition: all 0.5s ease 0s;
  &.has-border.not-selected {
    border: solid 0.1rem ${color('gray', 'main')};
  }
  &.not-selected {
    background-color: transparent;
  }
  &.selected {
    background-color: ${props => color(props.status, 'light')(props)};
    border-color: ${props => color(props.status, 'light')(props)}
  }
  &:hover {
    border-color: ${props => color(props.status, 'light')};
  }
  &:disabled {
    background-color: ${color('gray', 'ultra-light')};
    border-color: ${color('gray', 'ultra-light')};
  }
  &:active {
    svg {
      fill: ${color('white')};
    }
  }
  svg {
    width: 1rem !important;
    height:1rem !important;
    fill: ${color('white')};
  }
`;
