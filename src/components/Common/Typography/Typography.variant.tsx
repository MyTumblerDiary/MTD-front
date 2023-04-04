import { css } from 'styled-components';
import theme from '@/styles/theme';

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
  `,
  caption: css`
    --typography-size: 10px;
    --typography-weight: 400;
  `
};

export const VARIANTS = {
  default: css`
    --typography-color: black;
  `,
  accent: css`
    --typography-color: white;
  `,
  gray: css`
    --typography-color: ${theme.color.g400};
  `,
  success: css`
    --typography-color: ${theme.color.success};
  `,
  warning: css`
    --typography-color: ${theme.color.warning};
  `,
  error: css`
    --typography-color: ${theme.color.error};
  `
};
