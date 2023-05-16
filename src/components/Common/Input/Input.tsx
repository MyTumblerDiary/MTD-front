import { forwardRef } from 'react';

import * as Style from './Input.style';
import { SIZES, INPUT_VARIANTS } from './Input.variant';
import Svg from '../../svg';

import { type InputProps } from '@/types';

import Typography from '../Typography/Typography';

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
    size,
    label,
    isLabelVisible = false,
    isRequired = false,
    validation = 'default',
    message = '',
    onChange,
    ...rest
  },
  ref
) {
  const sizeStyle = SIZES[size];
  const inputVariantStyle = INPUT_VARIANTS[validation];

  return (
    <Style.InputWithLabel>
      {isLabelVisible && (
        <Style.Label htmlFor={name}>
          <Typography size='caption' variant={validation}>
            {label}
          </Typography>
          {isRequired && <Svg.RequiredStar />}
        </Style.Label>
      )}
      <Style.InputWrapper sizeStyle={sizeStyle}>
        <Style.Input
          ref={ref}
          id={name}
          name={name}
          variantStyle={inputVariantStyle}
          onChange={onChange}
          {...rest}
          aria-label={`${name}-input`}
        />
        <Style.AlertWrapper>
          {validation === 'error' && <Svg.AlertFilled />}
        </Style.AlertWrapper>
      </Style.InputWrapper>
      {message && (
        <Style.ValidationMessage>
          <Typography size='caption' variant={validation}>
            {message}
          </Typography>
        </Style.ValidationMessage>
      )}
    </Style.InputWithLabel>
  );
});
