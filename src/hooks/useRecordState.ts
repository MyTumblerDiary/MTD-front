import { useMemo, useState } from 'react';

import {
  imageValidation,
  placeValidation,
  submitValidation
} from '@/utils/helpers/record.helper';
import {
  type RecordInputTypes,
  type InputNameProps,
  type KakaoResultType,
  type SelectedPlaceType
} from '@/types';

const useRecordState = (initialState: RecordInputTypes) => {
  const [userInput, setUserInput] = useState<RecordInputTypes>(initialState);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const isValidateSubmit = useMemo(() => {
    return submitValidation(
      userInput.tumblerImage.validation,
      userInput.place.validation
    );
  }, [userInput.tumblerImage.validation, userInput.place.validation]);

  const handleValidation = (
    name: InputNameProps,
    value: string | File | boolean
  ) => {
    switch (name) {
      case 'tumblerImage':
        return imageValidation(value as File);
      case 'place':
        return placeValidation(value as string);
      case 'isDiscounted':
        return { value };
      default:
        return { validation: 'default', value, message: '' };
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type, checked } = e.target;
    const inputData = files ? files[0] : type === 'checkbox' ? checked : value;

    setUserInput((currentState) => ({
      ...currentState,
      [name]: {
        ...handleValidation(name as InputNameProps, inputData)
      }
    }));
  };

  const searchAutoComplete = (searchKeyword: string) => {
    const { kakao } = window;

    kakao.maps.load(() => {
      const placeObj = new kakao.maps.services.Places();

      placeObj.keywordSearch(
        searchKeyword,
        (result: KakaoResultType[]) => {
          setUserInput((currentState) => ({
            ...currentState,
            ['placeSearchResult']: {
              value: result
            }
          }));
        },
        {
          category_group_code: ['CE7'],
          size: 5
        }
      );
    });
  };

  const handlePlaceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserInput((currentState) => ({
      ...currentState,
      ['placeSearchWord']: {
        value
      }
    }));

    if (value.length <= 1) {
      setUserInput((currentState) => ({
        ...currentState,
        ['placeSearchResult']: {
          value: []
        }
      }));
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

  const onClickSearchResult = ({
    place,
    latitude,
    longitude
  }: SelectedPlaceType) => {
    setUserInput((currentState) => ({
      ...currentState,
      ['place']: {
        value: place,
        validation: 'success',
        message: ''
      },
      ['placeSearchResult']: {
        value: []
      },
      ['placeSearchWord']: {
        value: ''
      },
      ['coordinate']: {
        value: {
          latitude,
          longitude
        }
      }
    }));
  };

  const onChangePriceHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setUserInput((currentState) => ({
      ...currentState,
      ['price']: {
        value: Number(value)
      }
    }));
  };

  return {
    isValidateSubmit,
    userInput,
    setUserInput,
    handleUserInput,
    handlePlaceInput,
    onClickSearchResult,
    onChangePriceHandler
  };
};

export default useRecordState;
