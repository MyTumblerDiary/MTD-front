import React, { useMemo, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_FRANCISE } from '@/apollo/queries';
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

  const [getFranchiseInfo] = useLazyQuery(SEARCH_FRANCISE);

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

  const handleUserInputWithValidation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;
    const inputData = files ? files[0] : value;

    setUserInput((currentState) => ({
      ...currentState,
      [name]: {
        ...handleValidation(name as InputNameProps, inputData)
      }
    }));
  };

  const handlerUserInputWithoutValidation = (
    e: React.ChangeEvent<HTMLSelectElement> &
      React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, checked } = e.target;
    const inputData = value === 'on' ? checked : Number(value);
    setUserInput((currentState) => ({
      ...currentState,
      [name]: inputData
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
            ['placeSearchResult']: result
          }));
        },
        {
          category_group_code: ['CE7', 'FD6'],
          size: 5
        }
      );
    });
  };

  // 카카오 가게 검색할 때 사용
  const handlePlaceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserInput((currentState) => ({
      ...currentState,
      placeSearchWord: value
    }));

    if (value.length <= 1) {
      setUserInput((currentState) => ({
        ...currentState,
        placeSearchResult: []
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

  const onClickSearchResult = async ({
    id,
    place,
    latitude,
    longitude,
    detailAddress,
    streetNameAddress
  }: SelectedPlaceType) => {
    place.split(' ').forEach(async (name) => {
      const response = await getFranchiseInfo({
        variables: {
          searchInput: {
            searchBy: 'name',
            value: name
          }
        }
      });

      const franchiseData = response.data.franchisesBySearch[0];

      if (franchiseData) {
        setUserInput((currentState) => ({
          ...currentState,
          discountPrice: franchiseData.discountPrice,
          cafeData: {
            ...currentState.cafeData,
            franchiseId: franchiseData.id,
            discountPrice: franchiseData.discountPrice
          }
        }));
      }
    });

    setUserInput((currentState) => ({
      ...currentState,
      place: {
        value: place,
        validation: 'success',
        message: ''
      },
      placeSearchResult: [],
      placeSearchWord: '',
      cafeData: {
        ...currentState.cafeData,
        name: place,
        kakaoUId: id,
        detailAddress: detailAddress,
        latitude: latitude,
        longitude: longitude,
        streetNameAddress: streetNameAddress
      }
    }));
  };

  return {
    isValidateSubmit,
    userInput,
    setUserInput,
    handlePlaceInput,
    onClickSearchResult,
    handleUserInputWithValidation,
    handlerUserInputWithoutValidation
  };
};

export default useRecordState;
