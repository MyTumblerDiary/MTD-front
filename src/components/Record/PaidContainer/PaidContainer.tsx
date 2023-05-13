import React, { useState, useEffect } from 'react';
import useRecordState from '@/hooks/useRecordState';

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

const initialState: RecordInputTypes = {
  recordDate: {
    value: new Date()
  },
  tumblerImage: {
    value: '' as unknown as File,
    validation: 'default',
    message: ''
  },
  previewImage: {
    value: ''
  },
  place: {
    value: '',
    validation: 'default',
    message: ''
  },
  placeSearchWord: {
    value: ''
  },
  placeSearchResult: {
    value: []
  },
  isDiscounted: {
    value: false
  },
  price: {
    value: 0
  },
  coordinate: {
    value: {
      latitude: 0,
      longitude: 0
    }
  }
};

const PaidContainer = () => {
  const [memo, setMemo] = useState('');

  const {
    isValidateSubmit,
    userInput,
    setUserInput,
    handleUserInput,
    handlePlaceInput,
    onClickSearchResult,
    onChangePriceHandler
  } = useRecordState(initialState);

  useEffect(() => {
    if (userInput?.isDiscounted?.value) {
      setUserInput((currentState) => ({
        ...currentState,
        ['price']: {
          value: 100
        }
      }));
    } else {
      setUserInput((currentState) => ({
        ...currentState,
        ['price']: {
          value: 0
        }
      }));
    }
  }, [setUserInput, userInput?.isDiscounted?.value]);

  const RecordDatePickerProps = {
    recordDate: userInput.recordDate.value,
    setUserInput
  };

  const TumblerImageProps = {
    userInput,
    setUserInput,
    handleUserInput
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
    value: userInput?.placeSearchWord?.value || '',
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

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              userInput.placeSearchResult.value.length > 0 && (
                <SearchResultPopup
                  placeSearchResult={userInput.placeSearchResult.value}
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
              checked={userInput?.isDiscounted?.value}
              onChange={handleUserInput}
            />
            <Style.DiscountCheckboxLabel htmlFor='isDiscounted'>
              네, 할인 받았어요!
            </Style.DiscountCheckboxLabel>
          </Style.DiscountCheckboxContainer>
        </Style.ElementContainer>

        {userInput?.isDiscounted?.value && (
          <Style.ElementContainer>
            <Title variant='main'>할인 금액</Title>
            <Style.DiscountedAmountSelect onChange={onChangePriceHandler}>
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
