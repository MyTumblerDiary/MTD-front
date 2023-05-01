import styled, { CSSProp } from 'styled-components';

interface TitleProps {
  variantStyle: CSSProp;
}

export const HeadTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const Title = styled.h3<TitleProps>`
  ${(props) => props.variantStyle}
  font-size: 18px;
  font-weight: bold;
  color: var(--typography-color, black);
`;
