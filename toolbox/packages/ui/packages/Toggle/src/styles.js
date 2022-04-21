// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color, makeRgbaColor } from '@snappmarket/helpers';

export const StyledToggleWrapper = Styled.button`
  width: 3.4rem;
  height: 1.4rem;
  border-radius: 0.7rem;
  display: flex;
  border:0;
  padding: 0;
  position: relative;
  transition: background-color 0.3s ease-in 0s;
  outline: none;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  line-height: 0;
  &.selected {
    background-color: ${color('misc', 'neonGreen')};
    > span {
      background-color: ${color('secondary', 'main')};
      left: 1.6rem;
    }
  }
  &.disabled {
    cursor: not-allowed;
  }
  > span {
    width: 2rem;
    height: 2rem;
    left: 0;
    background-color: ${color('white')};
    display: block;
    border-radius: 50%;
    box-shadow: 0px 1.5px 3px ${makeRgbaColor(0.35, 'black')};
    position: absolute;
    transition: left 0.3s ease;
  }
`;
