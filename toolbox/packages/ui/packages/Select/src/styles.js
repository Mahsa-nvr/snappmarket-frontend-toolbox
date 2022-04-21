// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

export const StyledSelectWrapper = Styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin: 0.8rem auto;
`;

export const StyledSelectIconWrapper = Styled.div`
  position: relative;
  svg {
    position: absolute;
    bottom: 1.3rem;
    left: 1rem;
    width: 1rem !important;
    fill: ${color('gray', 'dark')};
  }
  &.ltr{
    svg{
      right: 1rem;
      left: auto;
    }
  }
`;

export const StyledSelect = Styled.select`
  width: 100%;
  border: 0.1rem solid ${props =>
  color(props.status, 'ultra-light')(props)};
  font-size: 1.4rem;
  height: 4rem;
  width: 100%;
  padding: 0 1.5rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease 0s;
  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  &:hover {
    border-color: ${props => color(props.status, 'light')(props)};
  }
  &::placeholder {
    color: ${color('gray', 'normal')};
  }
`;

export const StyledLabel = Styled.label`
  color: ${color('gray', 'dark')};
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
`;

export const StyledStar = Styled.span`
  color: ${color('red', 'normal')};
  margin-right: 0.2rem;
`;

export const StyledMessage = Styled.div`
  color: ${props =>
    color(props.type === 'success' ? 'green' : 'red', 'normal')(props)};
  font-size: 1.2rem;
  margin-top: 0.8rem;
`;
