import * as Style from './Heading.style';

import { VARIANTS } from '@/styles/typo.variant';

interface Props {
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'accent'
    | 'gray'
    | 'gray2'
    | 'success'
    | 'warning'
    | 'error'
    | 'main';
}

export default function Title({ children, variant = 'default' }: Props) {
  const variantStyle = VARIANTS[variant];

  return <Style.Title variantStyle={variantStyle}>{children}</Style.Title>;
}
