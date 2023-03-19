import styled, { CSSProp } from 'styled-components';

interface ButtonProps {
  sizeStyle: CSSProp;
}

export const Button = styled.button<ButtonProps>`
  ${(props) => props.sizeStyle}
  width: var(--button-width, 280px);
  height: var(--button-height, 48px);
  border-radius: 8px;
  background-color: #12b886;

  :disabled {
    opacity: 50%;
  }
`;
