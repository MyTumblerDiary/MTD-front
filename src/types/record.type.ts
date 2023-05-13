import { InputValidationProps, UserInputPramProps } from '.';
import { type KakaoResultType } from '@/types';

type UserFileInputPramProps = {
  value: File;
  validation: InputValidationProps;
  message: string;
};

export interface RecordInputTypes {
  recordDate: {
    value: Date;
  };
  tumblerImage: UserFileInputPramProps;
  previewImage: {
    value: string;
  };
  place: UserInputPramProps;
  placeSearchWord?: {
    value: string;
  };
  placeSearchResult?: {
    value: KakaoResultType[];
  };
  isDiscounted?: {
    value: boolean;
  };
  price?: {
    value: number;
  };
  coordinate?: {
    value: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface SelectedPlaceType {
  place: string;
  latitude: number;
  longitude: number;
}
