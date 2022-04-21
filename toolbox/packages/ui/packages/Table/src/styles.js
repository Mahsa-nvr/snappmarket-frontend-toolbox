// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { viewport, color } from '@snappmarket/helpers';

export const StyledTable = Styled.table`
  width: 100%;
  border: solid 0.1rem ${color('gray', 'ultra-light')};
  border-radius: 0.5rem;

  @media(max-width: ${viewport('md', -1)}) {
    &.responsive {
      display: flex;
      thead {
        > tr {
          display: flex;
          flex-direction: column;
          height: 100%;
          > * {
            &:not(:last-child){
             border-bottom: solid 0.1rem ${color('gray', 'ultra-light')};
            }
          }
        }
      }
      tbody {
        display: flex;
        flex: 1;
        overflow-x: auto;
        > tr {
          display: flex;
          flex-direction: column;
          td {
            white-space: nowrap;
            &:not(:last-child){
             border-bottom: solid 0.1rem ${color('gray', 'ultra-light')};
            }
          }
        }
      }
      tfoot {
        display: none;
      }
    }
  }
`;

export const StyledTableHeader = Styled.thead`
  background-color: ${color('gray', 'bright')};
`;
export const StyledTableBody = Styled.tbody``;
export const StyledTableFooter = Styled.tfoot`
  background-color: ${color('gray', 'bright')};
`;

export const StyledTableRow = Styled.tr`
  &:not(:last-child){
    border-bottom: solid 0.1rem ${color('gray', 'ultra-light')};
  }
  > * {
    padding: 1rem;
    &:not(:first-child){
      border-right: solid 0.1rem ${color('gray', 'ultra-light')};
    }
  }
`;

export const StyledTableHeaderColumn = Styled.th`
  font-size: 1.4rem;
  font-weight: 500;
`;
export const StyledTableColumn = Styled.td`
  font-size: 1.2rem;
`;
