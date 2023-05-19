import Router from 'next/router';
import { useState } from 'react';

import * as Style from './CafesContainer.style';

import {
  useStoreList,
  useCurrentCoords,
  useToggleSheet,
  useAddressByCoords
} from '@/hooks';

import { type CafesProps } from '@/types';

import MainHeader from '../Common/MainHeader/MainHeader';
import CafeList from './CafeList/CafeList';
import UserLocation from './UserLocation/UserLocation';
import CafeSearchWrapper from './CafeSearchWrapper/CafeSearchWrapper';
import ReactPortal from '../Common/BottomSheetFrame/ReactPortal';
import BottomSheet from './BottomSheet/BottomSheet';

const cafes: CafesProps = [
  {
    id: 1,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 500
  },
  {
    id: 2,
    name: '투썸 플레이스 리첸시아점2',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09798,
    discount_price: 300
  },
  {
    id: 3,
    name: '투썸 플레이스 리첸시아점3',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.5599,
    longitude: 127.09598,
    discount_price: 300
  },
  {
    id: 4,
    name: '투썸 플레이스 리첸시아점4',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 300
  },
  {
    id: 5,
    name: '투썸 플레이스 리첸시아점5',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 300
  },
  {
    id: 6,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 300
  }
];

export default function CafesContainer() {
  const { sheetState } = useToggleSheet();
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState('');

  const { data, loading } = useStoreList(
    { limit: 6, page: 1 },
    () => {},
    () => {}
  );
  const { isLoading, coords, getUserCoords } = useCurrentCoords();
  const { userAddress } = useAddressByCoords(coords);

  const handleSearchingState = () => {
    setIsSearching(true);
  };

  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;

    setKeyword(value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (keyword === '') {
      return;
    }

    Router.push(`/cafes/search?keyword=${keyword}`);
  };

  return (
    <Style.CafesContainer>
      <MainHeader title='카페' />
      <CafeSearchWrapper
        isSearching={isSearching}
        keyword={keyword}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchingState={handleSearchingState}
        handleSearchSubmit={handleSearchSubmit}
      />
      <UserLocation
        location={userAddress}
        handleSetLocation={getUserCoords}
        isLoading={isLoading}
      />
      <CafeList cafes={cafes} />
      {sheetState && (
        <ReactPortal>
          <BottomSheet />
        </ReactPortal>
      )}
    </Style.CafesContainer>
  );
}
