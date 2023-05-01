import { type TextareaProps } from '@/types';
import { SIZES, TEXTAREA_HEIGHT } from './Textarea.variant';

import Typography from '../Typography/Typography';

import * as Style from './Textarea.style';

const Textarea = ({
  name,
  size,
  height,
  lengthLimit,
  value,
  onChange,
  ...rest
}: TextareaProps) => {
  const sizeStyle = SIZES[size];
  const heightStyle = TEXTAREA_HEIGHT[height];
  const memoLength = value.length;

  return (
    <Style.Container sizeStyle={sizeStyle}>
      <Style.Textarea
        name={name}
        heightStyle={heightStyle}
        onChange={onChange}
        maxLength={lengthLimit}
        {...rest}
      />
      <Style.TextLength>
        <Typography size='body3' variant='gray2'>
          {memoLength} / {lengthLimit}
        </Typography>
      </Style.TextLength>
    </Style.Container>
  );
};

export default Textarea;
