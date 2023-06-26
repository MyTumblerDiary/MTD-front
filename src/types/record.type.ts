import { InputValidationProps, UserInputPramProps } from '.';
import { type KakaoResultType } from '@/types';

type UserFileInputPramProps = {
  value: File;
  validation: InputValidationProps;
  message: string;
};

type CafeDataTypes = {
  name?: string;
  discountPrice?: number;
  kakaoUId?: string;
  franchiseId?: string | null;
  detailAddress?: string;
  latitude?: number;
  longitude?: number;
  streetNameAddress?: string;
  lotNumberAddress?: string;
};

export interface RecordInputTypes {
  recordDate: Date;
  tumblerImage: UserFileInputPramProps;
  previewImageSrc: string;
  place: UserInputPramProps;
  placeSearchWord?: string;
  placeSearchResult?: KakaoResultType[];
  isDiscounted?: boolean;
  discountPrice?: number;
  cafeData?: CafeDataTypes;
}

export interface SelectedPlaceType {
  id: string;
  place: string;
  latitude: number;
  longitude: number;
  detailAddress: string;
  streetNameAddress: string;
}
