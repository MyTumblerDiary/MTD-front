import styled, { CSSProp } from 'styled-components';

interface InputWrapperProps {
  sizeStyle: CSSProp;
}

interface InputProps {
  variantStyle: CSSProp;
}

export const InputWithLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  position: absolute;
  left: 8px;
  top: -10px;
  z-index: 99;
  background-color: #ffffff;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${(props) => props.sizeStyle};
  position: relative;
  display: flex;
  width: var(--input-width, 280px);
  height: var(--input-height, 48px);
`;

export const Input = styled.input<InputProps>`
  ${(props) => props.variantStyle};
  width: 100%;
  height: 100%;
  padding: 15px 18px;
  font-size: 14px;
  border: 1px solid var(--input-border, #f5f5f5);
  border-radius: 8px;
  outline: none;

  :disabled {
    opacity: 50%;
  }

  :-webkit-autofill {
    box-shadow: 0 0 0 1000px #ffffff inset;
  }
`;

export const AlertWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 12px;
`;

export const ValidationMessage = styled.span`
  padding-top: 4px;
  padding-left: 12px;
`;
