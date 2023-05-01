import * as Style from './Typography.style';

import { SIZES } from './Typography.variant';

import { VARIANTS } from '@/styles/typo.variant';

import { TypographyProps } from '../../../types/typography.type';

export default function Typography({
  size,
  variant = 'default',
  children
}: TypographyProps) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <Style.Typography sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </Style.Typography>
  );
}
