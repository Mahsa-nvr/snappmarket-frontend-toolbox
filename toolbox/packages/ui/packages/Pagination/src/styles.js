// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

export const StyledPaginationWrapper = Styled.nav``;
export const StyledPaginationItemsWrapper = Styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  cursor: pointer;
`;
export const StyledNavigateButton = Styled.li`
  border-radius: 0.5rem;
  color: ${color('taupe')};
  width: 4rem;
  height: 4rem;
  font-size: 1.6rem;
  margin: 0 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    &:first-child {
      margin-left: -0.8rem;
    }
  }
  &[disabled] {
    opacity: 0.7;
  }
`;
export const StyledPaginationItem = Styled(StyledNavigateButton)`
  background-color: ${color('blue', 'bright')};
  transition: all 0.3s ease 0.1s;
  &:hover, &.active {
    background-color: ${color('blue', 'normal')};
    color: ${color('white')};
  }
  &.active:hover {
    cursor: default;
  }
`;
