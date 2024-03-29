// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { viewport } from '@snappmarket/helpers';

const StyledRow = Styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -0.8rem;
  margin-right: -0.8rem;
  flex-wrap: wrap;
`;
const StyledColumn = Styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  position: relative;
  width: 100%;
  ${props =>
    Object.keys(props.layouts).map(
      layout => `
      @media (min-width: ${props.theme.viewports[layout]}px){
        max-width: ${(100 * props.layouts[layout].size) / 12}%;
        flex: 0 0 ${(100 * props.layouts[layout].size) / 12}%;
        margin-right: ${(100 * props.layouts[layout].offset) / 12}%;
        order: ${props.layouts[layout].order};
      }
    `,
    )}
`;

const StyledContainer = Styled.div`
  max-width: ${props => props.theme.containerWidth};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  z-index: 1;
  &.fixed {
    max-width: 100%;
    @media (min-width: ${viewport('sm')}) {
      width: 576px;
    }
    @media (min-width: ${viewport('md')}) {
      width: 768px;
    }
    @media (min-width: ${viewport('lg')}) {
      width: 992px;
    }
    @media (min-width: ${viewport('xl')}) {
      width: 1250px;
    }
  }
`;

export { StyledRow, StyledColumn, StyledContainer };
