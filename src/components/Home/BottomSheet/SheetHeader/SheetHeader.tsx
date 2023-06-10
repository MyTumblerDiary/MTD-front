import * as Style from './SheetHeader.style';

import { useReactiveVar } from '@apollo/client';
import activeDayState from '@/store/activeDay';
import clickedTumblerDataState from '@/store/clickedTumblerData';

import Typography from '@/components/Common/Typography/Typography';
import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

export default function SheetHeader() {
  const activeDay = useReactiveVar(activeDayState);
  const tumblerRecords = useReactiveVar(clickedTumblerDataState);

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
        <Title>{tumblerRecords.length}</Title>
      </Style.SheetTitle>
    </Style.SheetHeader>
  );
}
