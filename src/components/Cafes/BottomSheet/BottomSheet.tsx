import { useReactiveVar } from '@apollo/client';
import cafeDetailState from '@/store/cafeDetail';

import * as Style from './BottomSheet.style';

import SheetContent from './SheetContent/SheetContent';
import SheetHeader from './SheetHeader/SheetHeader';

export default function BottomSheet() {
  const {
    name,
    streetNameAddress,
    discountPrice,
    thumbnail,
    latitude,
    longitude
  } = useReactiveVar(cafeDetailState);

  return (
    <Style.SheetWrapper>
      <SheetHeader name={name} address={streetNameAddress} />
      <SheetContent
        discountPrice={discountPrice}
        thumbnail={thumbnail}
        latitude={latitude}
        longitude={longitude}
      />
    </Style.SheetWrapper>
  );
}
