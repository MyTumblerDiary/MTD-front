import React, { SetStateAction } from 'react';

import Svg from '../../svg';

import * as Style from './TumblerImage.style';

interface TumblerImageProps {
  previewImage: string;
  setPreviewImage: React.Dispatch<SetStateAction<string>>;
}

const TumblerImage = ({ previewImage, setPreviewImage }: TumblerImageProps) => {
  const addImageHandler = (e: React.ChangeEvent<any>) => {
    if (e.target.files[0]) {
      setPreviewImage(URL?.createObjectURL(e.target.files[0]));
    }
  };

  const onClickPreviewDelete = () => {
    setPreviewImage('');
  };

  return (
    <Style.AddImageLabel htmlFor='image-input' onChange={addImageHandler}>
      <Style.AddImageButton>
        {previewImage === '' ? (
          <Svg.Plus />
        ) : (
          <Style.PreviewImageContainer>
            <Svg.XCircle onClick={onClickPreviewDelete} />
            <Style.PreviewImage src={previewImage} alt='텀블러 이미지' fill />
          </Style.PreviewImageContainer>
        )}
      </Style.AddImageButton>
      <Style.FileInput
        id='image-input'
        type='file'
        accept='image/*'
        disabled={previewImage !== ''}
      />
    </Style.AddImageLabel>
  );
};

export default TumblerImage;
