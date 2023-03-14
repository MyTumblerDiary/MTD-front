import * as Style from './Input.style';

import { SIZES } from './Input.variant';

interface Props {
  size: 'sm' | 'md';
}

export default function Input({ size }: Props) {
  const sizeStyle = SIZES[size];

  return <Style.Input sizeStyle={sizeStyle} />;
}
