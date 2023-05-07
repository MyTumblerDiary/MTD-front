import * as Style from './SuggestAmountConatiner.style';

import { type ButtonProps } from '@/types';

import Header from '../Common/Header/Header';
import SuggestAmountTitle from './SuggestAmountTitle/SuggestAmountTitle';
import SuggestAmountForm from './SuggestAmountForm/SuggestAmountForm';
import SuggestAmountReasonField from './SuggestAmountReasonField/SuggestAmountReasonField';
import SuggestAmountInfo from './SuggestAmountInfo/SuggestAmountInfo';
import Button from '../Common/Button/Button';
import Typography from '../Common/Typography/Typography';

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

export default function SuggestAmountContainer() {
  const suggestAmountTitle = data.cafe + data.branch;

  const submitButtonProps: ButtonProps = {
    type: 'button',
    name: 'suggest',
    size: 'md',
    children: (
      <Typography size='button1' variant='accent'>
        수정 제안하기
      </Typography>
    ),
    onClick: () => {}
  };

  return (
    <Style.SuggestAmountWrapper>
      <Header title='금액 수정 제안' />
      <SuggestAmountTitle title={suggestAmountTitle} />
      <SuggestAmountForm discountAmount={data.discountAmount} />
      <SuggestAmountReasonField />
      <SuggestAmountInfo />
      <Button {...submitButtonProps} />
    </Style.SuggestAmountWrapper>
  );
}
