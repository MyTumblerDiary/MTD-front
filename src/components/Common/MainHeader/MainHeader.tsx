import * as Style from './MainHeader.style';

import Title from '../Heading/Title';
import Svg from '@/components/svg';

interface HeaderProps {
  title: string | React.ReactNode;
}

export default function MainHeader({ title }: HeaderProps) {
  const isAlarmExists = false;

  return (
    <Style.HeaderWrapper>
      <Title>{title}</Title>
      {isAlarmExists ? <Svg.AlarmExsits /> : <Svg.Alarm />}
    </Style.HeaderWrapper>
  );
}
