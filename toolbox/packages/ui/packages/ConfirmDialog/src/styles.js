// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { color } from '@snappmarket/helpers';

import Modal from '../../Modal/src';
import { Container, Col } from '../../GridSystem/src';

export const StyledConfirmDialog = Styled(Modal)`
  font-size: 14px;
  z-index: 100000;
  footer{
    border-top: none;
  }
`;

export const StyledConfirmDialogContainer = Styled(Container)`
  padding-top: 0.8rem;
  padding-right: 0.8rem;
`;

export const StyledButtonWrapper = Styled(Container)`
  padding-bottom: 1rem;
  button {
    width: auto !important;
    min-width: auto;
    padding: 0 2rem !important;
  }
`;

export const StyledIconCol = Styled(Col)`
  > div {
    background: ${color('blue', 'bright')};
    width:6rem;
    height: 6rem;
    overflow: hidden;
    svg {
      width: 3.5rem;
      height: 3.5rem;
      color: ${color('blue', 'normal')};
    }
  }
`;

export const StyledContentCol = Styled(Col)`
  margin-top: 0.8rem;
  strong {
    color: ${color('gray', 'dark')};
  }
  p {
    color: ${color('gray', 'normal')};
    font-size: 1.3rem;
  }
`;
