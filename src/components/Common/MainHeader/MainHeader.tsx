import * as Style from './MainHeader.style';

import Title from '../Heading/Title';
import Svg from '@/components/svg';

interface HeaderProps {
  title: string | React.ReactNode;
}

export default function MainHeader({ title }: HeaderProps) {
  return (
    <Style.HeaderWrapper>
      <Title>{title}</Title>
      <Svg.Alarm />
    </Style.HeaderWrapper>
  );
}
