import { useReactiveVar } from '@apollo/client';
import cafeDetailState from '@/store/cafeDetail';

import * as Style from './SheetHeader.style';

import Typography from '@/components/Common/Typography/Typography';
import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

export default function SheetHeader() {
  const { name, streetNameAddress } = useReactiveVar(cafeDetailState);

  return (
    <Style.SheetHeader>
      <Style.SheetDateInfo>
        <Typography size='caption' variant='gray3'>
          {streetNameAddress}
        </Typography>
      </Style.SheetDateInfo>
      <Style.SheetTitle>
        <Title>{name}</Title>
        <Svg.TumblerMaterial />
      </Style.SheetTitle>
    </Style.SheetHeader>
  );
}
