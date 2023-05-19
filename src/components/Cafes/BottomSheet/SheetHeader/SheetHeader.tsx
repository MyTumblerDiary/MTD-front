import * as Style from './SheetHeader.style';

import Typography from '@/components/Common/Typography/Typography';
import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

interface SheetHeaderProps {
  name: string;
  address: string;
}

export default function SheetHeader({ name, address }: SheetHeaderProps) {
  return (
    <Style.SheetHeader>
      <Style.SheetDateInfo>
        <Typography size='caption' variant='gray3'>
          {address}
        </Typography>
      </Style.SheetDateInfo>
      <Style.SheetTitle>
        <Title>{name}</Title>
        <Svg.TumblerMaterial />
      </Style.SheetTitle>
    </Style.SheetHeader>
  );
}
