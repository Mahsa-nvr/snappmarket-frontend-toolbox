// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { makeRgbaColor, color } from '@snappmarket/helpers';

import Button from '../../Button/src';

export const StyledModalWrapper = Styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: right;
  overflow-y: auto;
  z-index: 1001;
  padding: 4rem 0;
`;
export const StyledLightBox = Styled.div`
  position: absolute;
  min-height: 100vh;
  top: 0;
  width: 100%;
  background: ${makeRgbaColor(0.6, 'black')};
  z-index: 1002;
`;
export const StyledModal = Styled.div`
  margin: 0 auto;
  max-width: calc(100% - 2rem);
  position: relative;
  z-index: 1003;
  background-color: ${color('white')};
  padding: 1rem;
  border-radius: 0.5rem;
  width: ${props => `${props.width}rem`};
  opacity: ${props => (props.animation ? '0' : '1')};

  &.top {
    top: 1rem;
  }
  &.center {
    top:50%;
  }
  &.bottom {
    top: 100%;
  }
  &.visible {
    display: block;
    &.animation {
      &.top {
        animation: showTop 1 linear 0.3s forwards;
      }
      &.center {
        animation: showCenter 1 linear 0.3s forwards;
      }
      &.bottom {
        animation: showBottom 1 linear 0.3s forwards;
      }
    }
  }
  @keyframes showBottom {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(calc(-100% - 1rem));
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(calc(-100% - 1rem));
    }
  }
  @keyframes showTop {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(0);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  @keyframes showCenter {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-50%);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(-50%);
    }
  }
`;
export const StyledCloseModalButton = Styled(Button)`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  min-width: auto;
  z-index: 9999;
`;
export const StyledModalHeader = Styled.header`
  border-bottom: solid 0.1rem ${color('gray', 'bright')};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  h3 {
    font-size: 1.6rem;
  }
`;
export const StyledModalContent = Styled.main``;
export const StyledModalFooter = Styled.footer`
  border-top: solid 0.1rem ${color('gray', 'ultra-light')};
  padding-top: 1rem;
  margin-top: 1rem;
 `;
