import { useState } from 'react';

import * as Style from './SuggestAmountConatiner.style';

import {
  type MessageInfoProps,
  type ButtonProps,
  type CafeProps
} from '@/types';

import { useNotifyToSlack, useSelectState } from '@/hooks';

import { formatNotifyMessage } from '@/utils/helpers/notify.helper';

import Header from '../Common/Header/Header';
import SuggestAmountTitle from './SuggestAmountTitle/SuggestAmountTitle';
import SuggestAmountForm from './SuggestAmountForm/SuggestAmountForm';
import SuggestAmountReasonField from './SuggestAmountReasonField/SuggestAmountReasonField';
import SuggestAmountInfo from './SuggestAmountInfo/SuggestAmountInfo';
import Button from '../Common/Button/Button';
import Typography from '../Common/Typography/Typography';

const data: CafeProps = {
  id: 1,
  name: '투썸 플레이스 리첸시아점',
  thumbnail: 'https://picsum.photos/150/120',
  street_name_address: '서울 용산구 백범로 90길 120',
  latitude: 37.54699,
  longitude: 127.09598,
  discount_price: 300
};

export default function SuggestAmountContainer() {
  const [text, setText] = useState('');
  const { selectedOption: newPrice, handleChangeOption } = useSelectState(
    data.discount_price
  );

  const info: MessageInfoProps = {
    title: data.name,
    message: text,
    price: data.discount_price,
    newPrice: newPrice as number
  };

  const { isLoading, isSuccess, error, notifySlackOnClick } = useNotifyToSlack(
    formatNotifyMessage(info, 'suggest')
  );

  const submitButtonProps: ButtonProps = {
    type: 'button',
    name: 'suggest',
    size: 'md',
    children: (
      <Typography size='button1' variant='accent'>
        수정 제안하기
      </Typography>
    ),
    onClick: notifySlackOnClick
  };

  if (isLoading) {
    return <div>로딩</div>;
  }

  return (
    <Style.SuggestAmountWrapper>
      <Header title='금액 수정 제안' />
      <SuggestAmountTitle title={data.name} />
      <SuggestAmountForm
        discountAmount={data.discount_price}
        handleChangePriceOption={handleChangeOption}
      />
      <SuggestAmountReasonField text={text} setText={setText} />
      <SuggestAmountInfo />
      <Button {...submitButtonProps} />
      {error && <div>{error}</div>}
    </Style.SuggestAmountWrapper>
  );
}
