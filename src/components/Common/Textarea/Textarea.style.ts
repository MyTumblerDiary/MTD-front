import styled, { CSSProp } from 'styled-components';
import theme from '@/styles/theme';

interface ContainerProps {
  sizeStyle: CSSProp;
}

interface TextareaProps {
  heightStyle: CSSProp;
}

export const Container = styled.div<ContainerProps>`
  ${(props) => props.sizeStyle};
  width: var(--textarea-width, 280px);
`;

export const Textarea = styled.textarea<TextareaProps>`
  ${(props) => props.heightStyle};
  width: 100%;
  height: var(--textarea-height, 60px);
  resize: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${theme.color.g300};
  outline: none;

  &:focus {
    outline: 1px solid ${theme.color.main};
    border: none;
  }
`;

export const TextLength = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
  letter-spacing: -0.5px;
`;
