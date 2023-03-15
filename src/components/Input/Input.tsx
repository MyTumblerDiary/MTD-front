import * as Style from './Input.style';

import { SIZES } from './Input.variant';

interface Props {
  type: 'text' | 'password' | 'email';
  name: string;
  size: 'sm' | 'md';
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({ name, size, onChange, ...rest }: Props) {
  const sizeStyle = SIZES[size];

  return (
    <Style.Input
      id={name}
      name={name}
      sizeStyle={sizeStyle}
      onChange={onChange}
      {...rest}
      aria-label={`${name}-input`}
    />
  );
}
