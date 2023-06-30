import { css } from 'styled-components';
import theme from '@/styles/theme';

export const VARIANTS = {
  default: css`
    --typography-color: black;
  `,
  accent: css`
    --typography-color: white;
  `,
  main: css`
    --typography-color: ${theme.color.main};
  `,
  primary: css`
    --typography-color: ${theme.color.primary};
  `,
  gray: css`
    --typography-color: ${theme.color.g400};
  `,
  gray2: css`
    --typography-color: ${theme.color.g500};
  `,
  gray3: css`
    --typography-color: ${theme.color.g600};
  `,
  success: css`
    --typography-color: ${theme.color.success};
  `,
  warning: css`
    --typography-color: ${theme.color.warning};
  `,
  error: css`
    --typography-color: ${theme.color.error};
  `,
  medium: css`
    --typography-color: ${theme.color.medium};
  `,
  high: css`
    --typography-color: ${theme.color.high};
  `
};
