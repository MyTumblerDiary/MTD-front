import * as Style from './BottomSheet.style';

import SheetContent from './SheetContent/SheetContent';
import SheetHeader from './SheetHeader/SheetHeader';

const data: CardDataProps = {
  id: 1,
  thumbnail: 'https://picsum.photos/150/120',
  cafe: '투썸 플레이스',
  branch: '리첸시아점',
  address: '서울 용산구 백범로 90길 120',
  lat: 37.54699,
  lng: 127.09598,
  discountAmount: 300
};

interface CardDataProps {
  id: number;
  thumbnail: string;
  cafe: string;
  branch: string;
  address: string;
  lat: number;
  lng: number;
  discountAmount: number;
}

export default function BottomSheet() {
  return (
    <Style.SheetWrapper>
      <SheetHeader
        title={data.cafe}
        branch={data.branch}
        address={data.address}
      />
      <SheetContent
        discountAmount={data.discountAmount}
        thumbnail={data.thumbnail}
        latitude={data.lat}
        longitude={data.lng}
      />
    </Style.SheetWrapper>
  );
}
