import * as Style from './BottomSheet.style';

import SheetContent from './SheetContent/SheetContent';
import SheetHeader from './SheetHeader/SheetHeader';

const data: DiaryDataProps[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/100/100',
    address: '스타벅스 숭례문점',
    memo: '50자 좋은 하루였다.',
    discountAmount: 200
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/100/100',
    address: '투썸플레이스 여의도점',
    memo: '좋은 하루였다.좋은 하루였다.좋은 하루였다.좋은 하루였다.좋은 하루였다.좋은 하루였다.',
    discountAmount: 300
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/100/100',
    address: '남대문커피 국회의사당점',
    memo: '남대문커피남대문커피남대문커피남대문커피남대문커피남대문커피남대문커피남대문커피',
    discountAmount: 500
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/100/100',
    address: '남대문커피 국회의사당점',
    memo: 'asd',
    discountAmount: 500
  }
];

interface DiaryDataProps {
  id: number;
  imageUrl: string;
  address: string;
  memo: string;
  discountAmount: number;
}

export default function BottomSheet() {
  return (
    <Style.SheetWrapper>
      <SheetHeader dataLength={data.length} />
      <SheetContent data={data} />
    </Style.SheetWrapper>
  );
}
