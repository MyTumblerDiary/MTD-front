import * as Style from './SheetHeader.style';

import { useReactiveVar } from '@apollo/client';
import activeDayState from '@/store/activeDay';

import Typography from '@/components/Common/Typography/Typography';
import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

interface SheetHeaderProps {
  dataLength: number;
}

export default function SheetHeader({ dataLength }: SheetHeaderProps) {
  const activeDay = useReactiveVar(activeDayState);

  return (
    <Style.SheetHeader>
      <Style.SheetDateInfo>
        <Typography size='caption' variant='gray3'>
          {activeDay.toLocaleString('ko', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </Typography>
      </Style.SheetDateInfo>
      <Style.SheetTitle>
        <Title>텀블러 기록</Title>
        <Svg.TumblerMaterial />
        <Title>{dataLength}</Title>
      </Style.SheetTitle>
    </Style.SheetHeader>
  );
}
