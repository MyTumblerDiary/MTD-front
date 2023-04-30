import * as Style from './Header.style';

import { Title } from '@/components/Common/Heading/Heading.style';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Style.HeaderWrapper>
      <Title>{title}</Title>
    </Style.HeaderWrapper>
  );
}
