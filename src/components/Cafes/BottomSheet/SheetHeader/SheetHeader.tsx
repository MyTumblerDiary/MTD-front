import * as Style from './SheetHeader.style';

import { useReactiveVar } from '@apollo/client';
import activeDayState from '@/store/activeDay';

import Typography from '@/components/Common/Typography/Typography';
import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

interface SheetHeaderProps {
  title: string;
  address: string;
  branch: string;
}

export default function SheetHeader({
  title,
  address,
  branch
}: SheetHeaderProps) {
  return (
    <Style.SheetHeader>
      <Style.SheetDateInfo>
        <Typography size='caption' variant='gray3'>
          {address}
        </Typography>
      </Style.SheetDateInfo>
      <Style.SheetTitle>
        <Title>{title}</Title>
        <Title>{branch}</Title>
        <Svg.TumblerMaterial />
      </Style.SheetTitle>
    </Style.SheetHeader>
  );
}
