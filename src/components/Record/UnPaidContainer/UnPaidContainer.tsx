import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useRecordState from '@/hooks/useRecordState';
import useImagePresign from '@/hooks/useImagePresign';
import useImageUpload from '@/hooks/useImageUpload';

import { RECORD_TUMBLER_PRIVATE_SPACE } from '@/apollo/mutations';

import Title from '../../Common/Heading/Title';
import Typography from '../../Common/Typography/Typography';
import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Header from '../../Common/Header/Header';
import RecordDatePicker from '../DatePicker/RecordDatePicker';
import TumblerImage from '../TumblerImage/TumblerImage';
import MemoContainer from '../MemoContainer/MemoContainer';

import {
  type InputProps,
  type ButtonProps,
  type TypographyProps,
  type TextareaProps,
  type RecordInputTypes
} from '@/types';

import { toStringByFormatting } from '@/utils/helpers/calendar.helper';
import { MEMO_MAX_LENGTH } from '@/utils/constants/recordMemoLength';

import * as Style from './UnPaidContainer.style';
import { useMutation } from '@apollo/client';

const initialState: RecordInputTypes = {
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
  recordDate: {
    value: new Date()
  },
  previewImage: {
    value: ''
  }
};

const UnPaidContainer = () => {
  const router = useRouter();

  const { userInput, isValidateSubmit, handleUserInput, setUserInput } =
    useRecordState(initialState);
  const [memo, setMemo] = useState('');

  const [imagePresign] = useImagePresign({
    imageData: userInput.tumblerImage.value
  });
  const { handleImageUpload } = useImageUpload();
  const [recordTumblerPrivate] = useMutation(RECORD_TUMBLER_PRIVATE_SPACE);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await imagePresign();
    const { presignedUrl, fileKey } = response.data.getPresignedUrl;

    await handleImageUpload(userInput.tumblerImage.value, presignedUrl);

    await recordTumblerPrivate({
      variables: {
        input: {
          imageFileKey: fileKey,
          memo: memo,
          placeType: userInput.place.value,
          usedAt: toStringByFormatting(userInput.recordDate.value)
        }
      },
      onCompleted: () => {
        router.push('/');
      }
    });
  };

  const RecordDatePickerProps = {
    recordDate: userInput.recordDate.value,
    setUserInput
  };

  const TumblerImageProps = {
    userInput,
    setUserInput,
    handleUserInput
  };

  const PlaceInputProps: InputProps = {
    type: 'text',
    name: 'place',
    size: 'full',
    label: 'place',
    value: userInput.place.value,
    maxLength: 10,
    placeholder: '장소를 입력해주세요.',
    onChange: handleUserInput
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

  return (
    <Style.Container>
      <Header title='텀블러 기록하기' />

      <Style.FormContainer onSubmit={onSubmitHandler}>
        <Style.FormMain>
          <RecordDatePicker {...RecordDatePickerProps} />

          <TumblerImage {...TumblerImageProps} />

          <Style.ElementContainer>
            <Title variant='main'>텀블러를 어디에서 사용했나요?</Title>
            <Input {...PlaceInputProps} />
          </Style.ElementContainer>

          <MemoContainer {...MemoProps} />

          <Style.SubmitButtonContainer>
            <Button {...SubmitButtonProps} />
          </Style.SubmitButtonContainer>
        </Style.FormMain>
      </Style.FormContainer>
    </Style.Container>
  );
};

export default UnPaidContainer;
