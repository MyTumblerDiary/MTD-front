import { useState } from 'react';

import { useReactiveVar } from '@apollo/client';
import cafeDetailState from '@/store/cafeDetail';

import * as Style from './SuggestAmountConatiner.style';

import { type MessageInfoProps, type ButtonProps } from '@/types';

import { useNotifyToSlack, useSelectState } from '@/hooks';

import { formatNotifyMessage } from '@/utils/helpers/notify.helper';

import Header from '../Common/Header/Header';
import SuggestAmountTitle from './SuggestAmountTitle/SuggestAmountTitle';
import SuggestAmountForm from './SuggestAmountForm/SuggestAmountForm';
import SuggestAmountReasonField from './SuggestAmountReasonField/SuggestAmountReasonField';
import SuggestAmountInfo from './SuggestAmountInfo/SuggestAmountInfo';
import Button from '../Common/Button/Button';
import Typography from '../Common/Typography/Typography';

export default function SuggestAmountContainer() {
  const [text, setText] = useState('');
  const { name, discountPrice } = useReactiveVar(cafeDetailState);
  const { selectedOption: newPrice, handleChangeOption } =
    useSelectState(discountPrice);

  const info: MessageInfoProps = {
    title: name,
    message: text,
    price: discountPrice,
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
      <SuggestAmountTitle title={name} />
      <SuggestAmountForm
        discountPrice={discountPrice}
        handleChangePriceOption={handleChangeOption}
      />
      <SuggestAmountReasonField text={text} setText={setText} />
      <SuggestAmountInfo />
      <Button {...submitButtonProps} />
    </Style.SuggestAmountWrapper>
  );
}
