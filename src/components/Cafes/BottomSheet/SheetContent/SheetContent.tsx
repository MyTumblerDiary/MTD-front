import Router from 'next/router';

import { useToggleSheet } from '@/hooks';

import * as Style from './SheetContent.style';

import Typography from '@/components/Common/Typography/Typography';
import Map from '../Map/Map';

interface SheetContentProps {
  discountAmount: number;
  thumbnail: string;
  latitude: number;
  longitude: number;
}

export default function SheetContent({
  discountAmount,
  thumbnail,
  latitude,
  longitude
}: SheetContentProps) {
  const { toggleSheet } = useToggleSheet();

  const linkToSuggestionPage = () => {
    toggleSheet();
    Router.push('/suggest-amount');
  };

  return (
    <Style.SheetContent>
      <Map markerImg={thumbnail} latitude={latitude} longitude={longitude} />
      <Style.LinkToSuggestionPage onClick={linkToSuggestionPage}>
        <Typography size='button1' variant='warning'>
          할인 금액 수정 제안하기
        </Typography>
        <Style.VerticalLine />
        <Typography size='button1' variant='warning'>
          {discountAmount}원
        </Typography>
      </Style.LinkToSuggestionPage>
    </Style.SheetContent>
  );
}
