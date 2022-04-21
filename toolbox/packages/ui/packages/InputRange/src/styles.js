// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color, makeRgbaColor } from '@snappmarket/helpers';

export const StyledInputRangeWrapper = Styled.div`
  .input-range__slider {
    appearance: none;
    background: ${color('blue', 'normal')};
    border: 0.1rem solid ${color('blue', 'normal')};
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 1rem;
    margin-top: -0.65rem;
    outline: none;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    width: 1rem;
  }
  .input-range__slider:active {
    transform: scale(1.3);
  }
  .input-range__slider:focus {
    box-shadow: 0 0 0 0.5rem ${makeRgbaColor(0.2, 'blue', 'normal')};
  }
  .input-range--disabled .input-range__slider {
    background: ${color('gray', 'light')};
    border: 0.1rem solid ${color('gray', 'light')};
    box-shadow: none;
    transform: none;
  }

  .input-range__slider-container {
    transition: left 0.3s ease-out;
  }

  .rtl .input-range__slider {
    margin-left: auto;
    margin-right: -0.5rem;
  }

  .rtl .input-range__slider-container {
    transition: right 0.3s ease-out;
  }

  .input-range__slider {
    margin-left: -0.5rem;
  }

  .input-range__label {
    color: ${color('gray', 'normal')};
    font-size: -0.8rem;
    transform: translateZ(0);
    white-space: nowrap;
  }

  .input-range__label--min,
  .input-range__label--max {
    bottom: -1.4rem;
    position: absolute;
  }

  .input-range__label--min {
    left: 0;
  }

  .input-range__label--max {
    right: 0;
  }

  .input-range__label--value {
    position: absolute;
    top: -1.8rem;
  }

  .rtl .input-range__label--min {
    left: auto;
    right: 0;
  }

  .rtl .input-range__label--max {
    left: 0;
    right: auto;
  }

  .input-range__label-container {
    left: -50%;
    position: relative;
  }

  .input-range__label--max .input-range__label-container {
    left: 50%;
  }

  .rtl .input-range__label-container {
    left: auto;
    right: -50%;
    position: relative;
  }

  .input-range__label--max .rtl .input-range__label-container {
    left: auto;
    right: 50%;
  }

  .input-range__track {
    background: ${color('gray', 'light')};
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 0.3rem;
    position: relative;
  }
  .input-range--disabled .input-range__track {
    background: ${color('gray', 'light')};
  }

  .input-range__track--background {
    left: 0;
    margin-top: -1.5rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: ${color('blue', 'normal')};
  }

  .rtl .input-range__track {
    transition: right 0.3s ease-out, width 0.3s ease-out;
  }

  .input-range__track {
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }

  .input-range {
    height: 1rem;
    position: relative;
    width: 100%;
  }

  .rtl.input-range {
    direction: rtl;
  }
`;
export const StyledInputRange = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 0;
  transform: translateY(-60%);
  .input-range__slider {
    border-color: ${color('blue', 'normal')};
  }
  .input-range__slider, .input-range__track--active {
    background-color: ${color('blue', 'normal')};
  }
`;

export const StyledRangeLabelWrapper = Styled.div`
  font-size: 1rem;
  margin-top: 2.4rem;
  direction: ${props => (props.rtl ? 'rtl' : 'ltr')};
  > span{
    font-size: 1.4rem;
    color: ${color('gray', 'dark')};
  }
`;
