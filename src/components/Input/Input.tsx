import * as Style from './Input.style';

import { SIZES, VARIANTS } from './Input.variant';

import Icons from '../Icons';
import Typography from '../Typography/Typography';

interface Props {
  type: 'text' | 'password' | 'email';
  name: string;
  size: 'sm' | 'md';
  value: string | number;
  label: string;
  isLabelVisible?: boolean;
  isRequired?: boolean;
  validation?: 'default' | 'success' | 'error';
  message?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function Input({
  name,
  size,
  label,
  isLabelVisible = false,
  isRequired = false,
  validation = 'default',
  message = '',
  onChange,
  ...rest
}: Props) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[validation];

  return (
    <Style.InputWithLabel>
      {isLabelVisible && (
        <Style.Label htmlFor={name}>
          <Typography size='body2'>{label}</Typography>
          {isRequired && <Icons.RequiredStar />}
        </Style.Label>
      )}
      <Style.InputWrapper sizeStyle={sizeStyle}>
        <Style.Input
          id={name}
          name={name}
          variantStyle={variantStyle}
          onChange={onChange}
          {...rest}
          aria-label={`${name}-input`}
        />
        <Style.AlertWrapper>
          {validation === 'error' && <Icons.AlertFilled />}
        </Style.AlertWrapper>
      </Style.InputWrapper>
      {message && <Style.ValidationMessage>{message}</Style.ValidationMessage>}
    </Style.InputWithLabel>
  );
}
