import * as Style from './Button.style';

import { SIZES } from './Button.variant';

interface Props {
  size: 'sm' | 'md';
  name: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({
  size,
  name,
  children,
  onClick,
  ...rest
}: Props) {
  const sizeStyle = SIZES[size];

  return (
    <Style.Button
      type='button'
      name={name}
      sizeStyle={sizeStyle}
      onClick={onClick}
      {...rest}
      aria-label={`${name}-button`}
    >
      {children}
    </Style.Button>
  );
}
