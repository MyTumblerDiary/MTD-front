import { useReactiveVar } from '@apollo/client';
import cafeDetailState from '@/store/cafeDetail';

import * as Style from './BottomSheet.style';

import SheetContent from './SheetContent/SheetContent';
import SheetHeader from './SheetHeader/SheetHeader';

export default function BottomSheet() {
  const {
    name,
    street_name_address,
    discount_price,
    thumbnail,
    latitude,
    longitude
  } = useReactiveVar(cafeDetailState);

  return (
    <Style.SheetWrapper>
      <SheetHeader name={name} address={street_name_address} />
      <SheetContent
        discountPrice={discount_price}
        thumbnail={thumbnail}
        latitude={latitude}
        longitude={longitude}
      />
    </Style.SheetWrapper>
  );
}
