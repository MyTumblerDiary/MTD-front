import styled, { CSSProp } from 'styled-components';

interface Props {
  sizeStyle: CSSProp;
}

export const Input = styled.input<Props>`
  ${(props) => props.sizeStyle};
  width: var(--input--width, 280px);
  height: var(--input--height, 48px);
  border: 1px solid #8e8e8e;
  border-radius: 8px;
`;
