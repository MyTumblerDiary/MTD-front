import * as Style from './MainHeader.style';

import Title from '../Heading/Title';

interface HeaderProps {
  title: string;
}

export default function MainHeader({ title }: HeaderProps) {
  return (
    <Style.HeaderWrapper>
      <Title variant='gray2'>{title}</Title>
    </Style.HeaderWrapper>
  );
}
