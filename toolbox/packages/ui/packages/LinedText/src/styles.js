// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

export const StyledLinedText = Styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  width: 100%;
  color: ${color('gray', 'dark')};
  margin: 0.8rem 0;
  font-size: 1.6rem;
  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    background: ${color('gray', 'ultra-light')};
    height: 0.1rem;
    font-size: 0;
    line-height: 0;
  }
  &:before {
    margin-left: 2rem;
  }
  &:after {
    margin-right: 2rem;
  }
`;
