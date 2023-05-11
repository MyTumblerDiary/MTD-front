import React from 'react';

import Title from '@/components/Common/Heading/Title';
import Typography from '@/components/Common/Typography/Typography';

import { type RecordInputTypes } from '@/types';

import Svg from '../../svg';

import * as Style from './TumblerImage.style';

interface TumblerImageProps {
  previewImage: string;
  setPreviewImage: React.Dispatch<React.SetStateAction<string>>;
  setUserInput: React.Dispatch<React.SetStateAction<RecordInputTypes>>;
  handlePlaceInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TumblerImage = ({
  previewImage,
  setPreviewImage,
  setUserInput,
  handlePlaceInput
}: TumblerImageProps) => {
  const addImageHandler = (e: React.ChangeEvent<any>) => {
    if (e.target.files[0]) {
      handlePlaceInput(e);
      setPreviewImage(URL?.createObjectURL(e.target.files[0]));
    }
  };

  const onClickPreviewDelete = () => {
    setPreviewImage('');
    setUserInput((currentState) => ({
      ...currentState,
      ['tumblerImage']: {
        value: '',
        validation: 'default',
        message: ''
      }
    }));
  };

  return (
    <Style.Container>
      <Title variant='main'>텀블러 이미지</Title>
      <Typography size='body3' variant='gray2'>
        이미지는 1장만 넣을 수 있습니다.
      </Typography>
      {previewImage ? (
        <Style.AddImageContainer>
          <Style.ImageDeleteButton onClick={onClickPreviewDelete} />
          <Style.PreviewImage
            src={previewImage}
            alt='텀블러 이미지'
            width={150}
            height={150}
          />
        </Style.AddImageContainer>
      ) : (
        <Style.AddImageLabel htmlFor='image-input' onChange={addImageHandler}>
          <Style.AddImageContainer>
            <Svg.Plus />
          </Style.AddImageContainer>
          <Style.FileInput
            id='image-input'
            type='file'
            accept='image/*'
            name='tumblerImage'
          />
        </Style.AddImageLabel>
      )}
    </Style.Container>
  );
};

export default TumblerImage;
