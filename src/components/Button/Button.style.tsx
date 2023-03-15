import styled, { CSSProp } from 'styled-components';

interface Props {
  sizeStyle: CSSProp;
}

export const Button = styled.button<Props>`
  ${(props) => props.sizeStyle}
  width: var(--input--width, 280px);
  height: var(--input--height, 48px);
  border-radius: 8px;
  background-color: #12b886;

  :disabled {
    opacity: 50%;
  }
`;
