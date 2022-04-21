// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

export const StyledBreadcrumbWrapper = Styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color:  ${color('white')};
  border-radius: 0.2rem;
  font-size:1.5rem;
`;

export const StyledBreadcrumbItem = Styled.div`
  padding: 1rem;
  a {
    text-decoration: none;
    color: ${color('gray', 'normal')};
    font-size: 1.2rem;
  }
  h2 {
    color: ${color('gray', 'normal')};
    font-size: 1.2rem;
  }
`;

export const StyledBreadcrumbItemSeparator = Styled.div``;

export const StyledBreadcrumbItemWrapper = Styled.div`
  display: flex;
  align-items: center;
`;
