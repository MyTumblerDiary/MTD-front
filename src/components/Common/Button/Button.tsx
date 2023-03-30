import * as Style from './Button.style';

import { type ButtonProps } from '@/types';

import { SIZES } from './Button.variant';

export default function Button({
  type,
  size,
  name,
  children,
  onClick,
  disabled = false,
  ...rest
}: ButtonProps) {
  const sizeStyle = SIZES[size];

  return (
    <Style.Button
      type={type}
      name={name}
      sizeStyle={sizeStyle}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      aria-label={`${name}-button`}
    >
      {children}
    </Style.Button>
  );
}
