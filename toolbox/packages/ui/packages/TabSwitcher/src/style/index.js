// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { makeRgbaColor, color } from '@snappmarket/helpers';
import { StyledPrimaryButton } from '../../../Button/src/styles';

export const StyledTab = Styled(StyledPrimaryButton)`
  display: inline-flex;
  margin: 0 1.6rem;
  height: 3.5rem;
  font-size: 1.4rem;
  min-width: 11rem;
  background-color: ${props =>
    color('blue', props.isActive ? 'normal' : 'bright')(props)};
  color: ${props =>
    props.isActive ? color('white')(props) : color('blue', 'normal')(props)};

  &:first-child {
    margin: 0;
  }
  &:hover {
    background-color: ${props =>
      color('blue', props.isActive ? 'normal' : 'bright')(props)};
    color: ${props =>
      props.isActive ? color('white')(props) : color('blue', 'normal')(props)};
  }
  &:focus,
  &:visited,
  &:checked,
  &:active {
    background-color: ${props =>
      color('blue', props.isActive ? 'normal' : 'bright')(props)};
    box-shadow: 0 0 1rem -0.1rem ${props =>
  makeRgbaColor(0.5, 'blue', props.isActive ? 'normal' : 'light')(props)};
  }
  border: none;
  font-weight: 500;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const StyledTabPanel = Styled.div`
  border-radius: 0.5rem;
  margin-top: 2.4rem;
  font-size: 1.4rem;
  color: ${color('gray', 'dark')};
`;

export const StyledTabSwitcher = Styled.div`
  padding: 1.6rem;
`;
