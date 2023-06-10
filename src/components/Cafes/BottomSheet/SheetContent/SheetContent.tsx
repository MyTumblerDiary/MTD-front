import Router from 'next/router';

import { useReactiveVar } from '@apollo/client';
import cafeDetailState from '@/store/cafeDetail';

import { useToggleSheet } from '@/hooks';

import * as Style from './SheetContent.style';

import Typography from '@/components/Common/Typography/Typography';
import Map from '../Map/Map';

export default function SheetContent() {
  const { toggleSheet } = useToggleSheet();
  const { discountPrice } = useReactiveVar(cafeDetailState);

  const linkToSuggestionPage = () => {
    toggleSheet();
    Router.push('/suggest-amount');
  };

  return (
    <Style.SheetContent>
      <Map />
      <Style.LinkToSuggestionPage onClick={linkToSuggestionPage}>
        <Typography size='button1' variant='warning'>
          할인 금액 수정 제안하기
        </Typography>
        <Style.VerticalLine />
        <Typography size='button1' variant='warning'>
          {discountPrice}원
        </Typography>
      </Style.LinkToSuggestionPage>
    </Style.SheetContent>
  );
}
