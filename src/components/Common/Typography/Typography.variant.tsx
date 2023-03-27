import { css } from 'styled-components';

export const SIZES = {
  body1: css`
    --typography-size: 16px;
    --typography-weight: 400;
  `,
  body2: css`
    --typography-size: 14px;
    --typography-weight: 400;
  `,
  body3: css`
    --typography-size: 12px;
    --typography-weight: 400;
  `,
  button1: css`
    --typography-size: 16px;
    --typography-weight: 700;
  `,
  button2: css`
    --typography-size: 14px;
    --typography-weight: 700;
  `
};

export const VARIANTS = {
  default: css`
    --typography-color: black;
  `,
  accent: css`
    --typography-color: white;
  `
};
