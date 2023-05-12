import { type TextareaProps } from '@/types';
import { SIZES, TEXTAREA_HEIGHT } from './Textarea.variant';

import Typography from '../Typography/Typography';

import * as Style from './Textarea.style';

const Textarea = ({
  name,
  size,
  height,
  lengthLimit,
  placeholder,
  value,
  setValue,
  ...rest
}: TextareaProps) => {
  const sizeStyle = SIZES[size];
  const heightStyle = TEXTAREA_HEIGHT[height];
  const memoLength = value.length;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    if (value.length > lengthLimit) {
      const text = value.slice(0, lengthLimit);
      setValue(text);
      return;
    }
    setValue(value);
  };

  return (
    <Style.Container sizeStyle={sizeStyle}>
      <Style.Textarea
        name={name}
        heightStyle={heightStyle}
        onChange={onChangeHandler}
        value={value}
        placeholder={placeholder}
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
