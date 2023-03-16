import styled, { CSSProp } from 'styled-components';

interface Props {
  sizeStyle: CSSProp;
  variantStyle: CSSProp;
}

export const Typography = styled.span<Props>`
  ${(props) => props.sizeStyle}
  ${(props) => props.variantStyle}
  font-size: var(--typography--size, 16px);
  font-weight: var(--typography--weight, 400);
  color: var(--typography--color, black);
`;
