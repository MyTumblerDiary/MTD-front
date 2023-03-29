import * as Style from './Typography.style';

import { SIZES, VARIANTS } from './Typography.variant';

interface Props {
  size: 'body1' | 'body2' | 'body3' | 'caption' | 'button1' | 'button2';
  variant?: 'default' | 'accent' | 'success' | 'error';
  children: React.ReactNode;
}

export default function Typography({
  size,
  variant = 'default',
  children
}: Props) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <Style.Typography sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </Style.Typography>
  );
}
