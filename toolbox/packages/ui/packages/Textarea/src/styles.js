// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

export const StyledTextareaWrapper = Styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin: 0.8rem auto;
`;

export const StyledTextarea = Styled.textarea`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  background: none;
  border: 0.1rem solid ${props =>
  color(props.status, 'ultra-light')(props)};
  font-size: 1.4rem;
  height: 4rem;
  min-height: 9.5rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease 0s;
  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  &:focus {
    border-color: ${color('blue', 'dark')};
  }
  &:hover {
    border-color: ${props => color(props.status, 'light')(props)};
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
