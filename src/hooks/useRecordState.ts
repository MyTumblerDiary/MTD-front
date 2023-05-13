import { useMemo, useState } from 'react';

import {
  imageValidation,
  placeValidation,
  submitValidation
} from '@/utils/helpers/record.helper';
import { type RecordInputTypes, type InputNameProps } from '@/types';

const useRecordState = (initialState: RecordInputTypes) => {
  const [userInput, setUserInput] = useState<RecordInputTypes>(initialState);

  const isValidateSubmit = useMemo(() => {
    return submitValidation(
      userInput.tumblerImage.validation,
      userInput.place.validation
    );
  }, [userInput.tumblerImage.validation, userInput.place.validation]);

  const handleValidation = (name: InputNameProps, value: string | File) => {
    switch (name) {
      case 'tumblerImage':
        return imageValidation(value as File);
      case 'place':
        return placeValidation(value as string);
      default:
        return { validation: 'default', value, message: '' };
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    const inputData = files ? files[0] : value;

    setUserInput((currentState) => ({
      ...currentState,
      [name]: {
        ...handleValidation(name as InputNameProps, inputData)
      }
    }));
  };

  return {
    userInput,
    isValidateSubmit,
    handleUserInput,
    setUserInput
  };
};

export default useRecordState;
