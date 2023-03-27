import { css } from 'styled-components';

export const SIZES = {
  sm: css`
    --input-width: 110px;
    --input-height: 48px;
  `,
  md: css`
    --input-width: 280px;
    --input-height: 48px;
  `
};

export const VARIANTS = {
  default: css`
    --input-border: #d1d1d1;
  `,
  success: css`
    --input-border: #006eff;
  `,
  error: css`
    --input-border: #f00001;
  `
};
