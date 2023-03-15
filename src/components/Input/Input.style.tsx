import styled, { CSSProp } from 'styled-components';

interface Props {
  sizeStyle: CSSProp;
}

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input<Props>`
  ${(props) => props.sizeStyle};
  width: var(--input--width, 280px);
  height: var(--input--height, 48px);
  border: 1px solid #e4e4e4;
  border-radius: 8px;
`;
