import validationMessage from '../constants/validationMessage';

// 이미지가 있으면 통과
export const imageValidation = (imageFile: File) => {
  if (!imageFile) {
    return {
      validation: 'error',
      message: validationMessage.recordTumblerImage,
      value: ''
    };
  }

  return { validation: 'success', message: '', value: imageFile };
};

// 장소는 한 글자라도 있으면 통과
export const placeValidation = (place: string) => {
  if (!place) {
    return {
      validation: 'error',
      message: validationMessage.recordPlace,
      value: ''
    };
  }

  return { validation: 'success', message: '', value: place };
};

export const submitValidation = (
  imageValidation: string,
  placeValidation: string
) => {
  return imageValidation === 'success' && placeValidation === 'success';
};
