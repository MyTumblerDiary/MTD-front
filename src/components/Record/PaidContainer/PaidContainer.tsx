import React, { useState } from 'react';

import Title from '../../Common/Heading/Title';
import Typography from '../../Common/Typography/Typography';
import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Header from '../../Common/Header/Header';
import RecordDatePicker from '../DatePicker/RecordDatePicker';
import TumblerImage from '../TumblerImage/TumblerImage';
import SearchResultPopup from '../SearchResultPopup/SearchResultPopup';

import {
  type InputProps,
  type ButtonProps,
  type TypographyProps
} from '@/types';
import { KakaoResultType } from '@/types/kakaoSearchResult.type';

import { DISCOUNTED_AMOUNT } from '@/utils/constants/discountedAmount';

import * as Style from './PaidContainer.style';

const PaidContainer = () => {
  const [recordDate, setRecordDate] = useState(new Date());
  const [previewImage, setPreviewImage] = useState('');
  const [placeSearchWord, setPlaceSearchWord] = useState('');
  const [placeSearchResult, setPlaceSearchResult] = useState<KakaoResultType[]>(
    []
  );
  const [place, setPlace] = useState('');
  const [isDiscountChecked, setIsDiscountChecked] = useState(false);

  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const handlePlaceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlaceSearchWord(value);

    if (value.length <= 1) {
      setPlaceSearchResult([]);
      return;
    }

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      searchAutoComplete(value);
    }, 100);

    setTimer(newTimer);
  };

  const searchAutoComplete = (searchKeyword: string) => {
    const { kakao } = window;

    console.log('히히');

    kakao.maps.load(() => {
      const placeObj = new kakao.maps.services.Places();

      placeObj.keywordSearch(
        searchKeyword,
        (result: KakaoResultType[]) => {
          setPlaceSearchResult(result);
        },
        {
          category_group_code: ['CE7'],
          size: 5
        }
      );
    });
  };

  const onClickSearchResult = (place: string) => {
    setPlace(place);
    setPlaceSearchResult([]);
    setPlaceSearchWord('');
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDiscountChecked(e.target.checked);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const RecordDatePickerProps = {
    recordDate,
    setRecordDate
  };

  const TumblerImageProps = {
    previewImage,
    setPreviewImage
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
    children: <Typography {...SubmitButtonTextProps} />
  };

  const PlaceInputProps: InputProps = {
    type: 'text',
    name: 'place',
    size: 'full',
    label: 'place',
    value: placeSearchWord,
    placeholder: '장소를 입력해주세요.',
    onChange: handlePlaceInput
  };

  return (
    <Style.Container>
      <Header title='텀블러 기록하기' />

      <Style.FormMain onSubmit={onSubmitHandler}>
        <div>
          <Title variant='main'>날짜</Title>
          <Style.DatePickerContainer>
            <RecordDatePicker {...RecordDatePickerProps} />
          </Style.DatePickerContainer>
        </div>

        <Style.ElementContainer>
          <Title variant='main'>텀블러 이미지</Title>
          <Typography size='body3' variant='gray2'>
            이미지는 1장만 넣을 수 있습니다.
          </Typography>
          <TumblerImage {...TumblerImageProps} />
        </Style.ElementContainer>

        <Style.ElementContainer>
          <Title variant='main'>텀블러를 어디에서 사용했나요?</Title>
          <Style.SearchContainer>
            <Input {...PlaceInputProps} />
            {placeSearchResult.length > 0 && (
              <SearchResultPopup
                placeSearchResult={placeSearchResult}
                onClickSearchResult={onClickSearchResult}
              />
            )}
          </Style.SearchContainer>
          {place && (
            <div>
              <Style.SelectedPlace>
                <Typography size='body2'>{place}</Typography>
              </Style.SelectedPlace>
            </div>
          )}
        </Style.ElementContainer>

        <Style.ElementContainer>
          <Title variant='main'>텀블러 할인을 받았나요?</Title>
          <Style.DiscountCheckboxContainer>
            <Style.DiscountCheckbox
              type='checkbox'
              id='discount'
              checked={isDiscountChecked}
              onChange={onChangeCheckbox}
            />
            <Style.DiscountCheckboxLabel htmlFor='discount'>
              네, 할인 받았어요!
            </Style.DiscountCheckboxLabel>
          </Style.DiscountCheckboxContainer>
        </Style.ElementContainer>

        {isDiscountChecked && (
          <Style.ElementContainer>
            <Title variant='main'>할인 금액</Title>
            <Style.DiscountedAmountSelect name='discounted_amount'>
              {DISCOUNTED_AMOUNT.map((amount) => (
                <option key={amount} value={amount}>
                  {amount}원
                </option>
              ))}
            </Style.DiscountedAmountSelect>
          </Style.ElementContainer>
        )}

        <Style.SubmitButtonContainer>
          <Button {...SubmitButtonProps} />
        </Style.SubmitButtonContainer>
      </Style.FormMain>
    </Style.Container>
  );
};

export default PaidContainer;
