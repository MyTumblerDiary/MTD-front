import styled, { CSSProp } from 'styled-components';

interface TypographyProps {
  sizeStyle: CSSProp;
  variantStyle: CSSProp;
}

export const Typography = styled.span<TypographyProps>`
  ${(props) => props.sizeStyle}
  ${(props) => props.variantStyle}
  font-size: var(--typography-size, 16px);
  font-weight: var(--typography-weight, 400);
  color: var(--typography-color, black);
`;
