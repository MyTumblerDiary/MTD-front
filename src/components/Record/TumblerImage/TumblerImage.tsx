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
    <>
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
          <Style.FileInput id='image-input' type='file' accept='image/*' />
        </Style.AddImageLabel>
      )}
    </>
  );
};

export default TumblerImage;
