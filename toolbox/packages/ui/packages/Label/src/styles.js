// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { defineForegroundColor, color } from '@snappmarket/helpers';

export const StyledLabel = Styled.label`
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 0.7rem 0.7rem 0.6rem 0.7rem;
  background: ${props => color(props.color, 'ultra-light')(props)};
  font-family: ${props => props.theme.defaultFont};
  color: ${props => color(props.color, 'normal')(props)};
  line-height: 1.5rem;
  vertical-align: middle;
  border: ${props =>
    props.hasBorder ? '0.1rem solid transparent' : 'none'};
  font-size: ${props => `${props.fontSize}rem`};
  border-radius: ${props =>
    typeof props.radius === 'number' ? `${props.radius}rem` : props.radius};
`;

export const StyledPrimaryLabel = Styled(StyledLabel)`
  background-color: ${props => color(props.color, 'normal')(props)};
  border-color: ${props => color(props.color, 'normal')(props)};
  color: ${props =>
    color(defineForegroundColor(`${color(props.color, 'dark')(props)}`))};
`;

export const StyledMaterialLabel = Styled(StyledLabel)`
  background-color: ${props => color(props.color, 'bright')(props)};
  border-color: ${props => color(props.color, 'bright')(props)};
  color: ${props => color(props.color, 'normal')(props)};
`;

export const StyledOutlineLabel = Styled(StyledLabel)`
  background-color: transparent;
  border-color: ${props => color(props.color, 'normal')(props)};
  color: ${props => color(props.color, 'normal')(props)};
`;

export const StyledQuietLabel = Styled(StyledLabel)`
  background: none;
  border-color: transparent;
  color: ${props => color(props.color, 'normal')(props)};
`;
