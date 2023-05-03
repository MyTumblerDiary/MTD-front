import React, { useState } from 'react';

import Title from '../../Common/Heading/Title';
import Typography from '../../Common/Typography/Typography';
import Input from '@/components/Common/Input/Input';
import Textarea from '@/components/Common/Textarea/Textarea';
import Button from '@/components/Common/Button/Button';
import Header from '../../Common/Header/Header';
import RecordDatePicker from '../DatePicker/RecordDatePicker';
import TumblerImage from '../TumblerImage/TumblerImage';

import {
  type InputProps,
  type ButtonProps,
  type TypographyProps,
  type TextareaProps
} from '@/types';

import { MEMO_MAX_LENGTH } from '@/utils/constants/recordMemoLength';

import * as Style from './UnPaidContainer.style';

const UnPaidContainer = () => {
  const [recordDate, setRecordDate] = useState(new Date());
  const [previewImage, setPreviewImage] = useState('');
  const [place, setPlace] = useState('');
  const [memo, setMemo] = useState('');

  const handleChangePlace = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlace(value);
  };

  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMemo(value);
  };

  const RecordDatePickerProps = {
    recordDate,
    setRecordDate
  };

  const TumblerImageProps = {
    previewImage,
    setPreviewImage
  };

  const PlaceInputProps: InputProps = {
    type: 'text',
    name: 'place',
    size: 'full',
    label: 'place',
    value: place,
    maxLength: 10,
    placeholder: '장소를 입력해주세요.',
    onChange: handleChangePlace
  };

  const MemoProps: TextareaProps = {
    name: 'memo',
    value: memo,
    lengthLimit: MEMO_MAX_LENGTH,
    size: 'full',
    height: 'md',
    placeholder: '오늘의 텀블러 사용은 어땠나요?',
    onChange: handleChangeMemo
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

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Style.Container>
      <Header title='텀블러 기록하기' />

      <Style.FormContainer onSubmit={onSubmitHandler}>
        <Style.FormMain>
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
            <Input {...PlaceInputProps} />
          </Style.ElementContainer>

          <Style.ElementContainer>
            <Style.MemoTitleContainer>
              <Title variant='main'>메모</Title>
              <Typography size='body3' variant='gray2'>
                (선택사항)
              </Typography>
            </Style.MemoTitleContainer>
            <Textarea {...MemoProps} />
          </Style.ElementContainer>

          <Style.SubmitButtonContainer>
            <Button {...SubmitButtonProps} />
          </Style.SubmitButtonContainer>
        </Style.FormMain>
      </Style.FormContainer>
    </Style.Container>
  );
};

export default UnPaidContainer;
