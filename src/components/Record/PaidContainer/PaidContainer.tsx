import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import useRecordState from '@/hooks/useRecordState';
import useImageUpload from '@/hooks/useImageUpload';
import useImagePresign from '@/hooks/useImagePresign';

import { RECORD_TUMBLER_CAFE } from '@/apollo/mutations';

import Title from '../../Common/Heading/Title';
import Typography from '../../Common/Typography/Typography';
import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Header from '../../Common/Header/Header';
import RecordDatePicker from '../DatePicker/RecordDatePicker';
import TumblerImage from '../TumblerImage/TumblerImage';
import SearchResultPopup from '../SearchResultPopup/SearchResultPopup';
import MemoContainer from '../MemoContainer/MemoContainer';

import {
  type InputProps,
  type ButtonProps,
  type TypographyProps,
  type TextareaProps,
  type RecordInputTypes
} from '@/types';

import { MEMO_MAX_LENGTH } from '@/utils/constants/recordMemoLength';
import { DISCOUNTED_AMOUNT } from '@/utils/constants/discountedAmount';

import * as Style from './PaidContainer.style';
import { toStringByFormatting } from '@/utils/helpers/calendar.helper';

const initialState: RecordInputTypes = {
  recordDate: new Date(),
  previewImageSrc: '',
  tumblerImage: {
    value: '' as unknown as File,
    validation: 'default',
    message: ''
  },
  place: {
    value: '',
    validation: 'default',
    message: ''
  },

  placeSearchWord: '',
  placeSearchResult: [],
  isDiscounted: false,
  discountPrice: 0,

  cafeData: {
    name: '',
    discountPrice: 0,
    kakaoUId: '',
    franchiseId: null,
    detailAddress: '',
    latitude: 0,
    longitude: 0,
    streetNameAddress: '',
    lotNumberAddress: ''
  }
};

const PaidContainer = () => {
  const router = useRouter();
  const [memo, setMemo] = useState('');
  const {
    isValidateSubmit,
    userInput,
    setUserInput,
    handleUserInputWithValidation,
    handlePlaceInput,
    onClickSearchResult,
    handlerUserInputWithoutValidation
  } = useRecordState(initialState);

  const [imagePresign] = useImagePresign({
    imageData: userInput.tumblerImage.value
  });
  const { handleImageUpload } = useImageUpload();

  const [recordTumblerCafe] = useMutation(RECORD_TUMBLER_CAFE);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imagePresignResponse = await imagePresign();
    const { presignedUrl, fileKey } = imagePresignResponse.data.getPresignedUrl;

    await handleImageUpload(userInput.tumblerImage.value, presignedUrl);

    const discountedPrice = !userInput.isDiscounted
      ? 0
      : userInput.discountPrice;

    await recordTumblerCafe({
      variables: {
        input: {
          createStoreInput: {
            ...userInput.cafeData
          },
          createTumblerRecordInput: {
            usedAt: toStringByFormatting(userInput.recordDate),
            imageFileKey: fileKey,
            memo: memo,
            placeType: userInput.place.value,
            prices: discountedPrice
          }
        }
      },
      onCompleted: () => {
        router.push('/');
      }
    });
  };

  const RecordDatePickerProps = {
    recordDate: userInput.recordDate,
    setUserInput
  };

  const TumblerImageProps = {
    userInput,
    setUserInput,
    handleUserInputWithValidation
  };

  const SubmitButtonTextProps: TypographyProps = {
    size: 'button1',
    variant: 'accent',
    children: '기록하기'
  };

  const SubmitButtonProps: ButtonProps = {
    type: 'submit',
    size: 'lg',
    name: 'record',
    disabled: !isValidateSubmit,
    children: <Typography {...SubmitButtonTextProps} />
  };

  const PlaceInputProps: InputProps = {
    type: 'text',
    name: 'place',
    size: 'full',
    label: 'place',
    value: userInput?.placeSearchWord || '',
    placeholder: '장소를 입력해주세요.',
    onChange: handlePlaceInput
  };

  const MemoProps: TextareaProps = {
    name: 'memo',
    value: memo,
    lengthLimit: MEMO_MAX_LENGTH,
    size: 'full',
    height: 'md',
    placeholder: '오늘의 텀블러 사용은 어땠나요?',
    setValue: setMemo
  };

  return (
    <Style.Container>
      <Header title='텀블러 기록하기' />

      <Style.FormMain onSubmit={onSubmitHandler}>
        <RecordDatePicker {...RecordDatePickerProps} />

        <TumblerImage {...TumblerImageProps} />

        <Style.ElementContainer>
          <Title variant='main'>텀블러를 어디에서 사용했나요?</Title>
          <Style.SearchContainer>
            <Input {...PlaceInputProps} />
            {userInput.placeSearchResult &&
              userInput.placeSearchResult.length > 0 && (
                <SearchResultPopup
                  placeSearchResult={userInput.placeSearchResult}
                  onClickSearchResult={onClickSearchResult}
                />
              )}
          </Style.SearchContainer>
          {userInput.place.value && (
            <div>
              <Style.SelectedPlace>
                <Typography size='body2'>{userInput.place.value}</Typography>
              </Style.SelectedPlace>
            </div>
          )}
        </Style.ElementContainer>

        <Style.ElementContainer>
          <Title variant='main'>텀블러 할인을 받았나요?</Title>
          <Style.DiscountCheckboxContainer>
            <Style.DiscountCheckbox
              type='checkbox'
              id='isDiscounted'
              name='isDiscounted'
              checked={userInput?.isDiscounted}
              onChange={handlerUserInputWithoutValidation}
            />
            <Style.DiscountCheckboxLabel htmlFor='isDiscounted'>
              네, 할인 받았어요!
            </Style.DiscountCheckboxLabel>
          </Style.DiscountCheckboxContainer>
        </Style.ElementContainer>

        {userInput?.isDiscounted && (
          <Style.ElementContainer>
            <Title variant='main'>할인 금액</Title>
            <Style.DiscountedAmountSelect
              onChange={handlerUserInputWithoutValidation}
              value={userInput.discountPrice}
              disabled={userInput.discountPrice !== 0}
            >
              {DISCOUNTED_AMOUNT.map((amount) => (
                <option key={amount} value={amount}>
                  {amount}원
                </option>
              ))}
            </Style.DiscountedAmountSelect>
          </Style.ElementContainer>
        )}

        <MemoContainer {...MemoProps} />

        <Style.SubmitButtonContainer>
          <Button {...SubmitButtonProps} />
        </Style.SubmitButtonContainer>
      </Style.FormMain>
    </Style.Container>
  );
};

export default PaidContainer;
