import { css } from 'styled-components';

export const SIZES = {
  sm: css`
    --input-width: 110px;
    --input-height: 48px;
  `,
  md: css`
    --input-width: 280px;
    --input-height: 48px;
  `,
  lg: css`
    --input-width: 320px;
    --input-height: 48px;
  `,
  full: css`
    --input-width: 100%;
    --input-height: 48px;
  `
};

export const LABEL_VARIANTS = {
  default: css`
    --label-color: black;
  `,
  success: css`
    --label-color: #006eff;
  `,
  error: css`
    --label-color: #f00001;
  `
};

export const INPUT_VARIANTS = {
  default: css`
    --input-border: #f5f5f5;
  `,
  success: css`
    --input-border: #006eff;
  `,
  error: css`
    --input-border: #f00001;
  `
};
