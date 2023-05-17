import Router from 'next/router';
import { useState } from 'react';

import * as Style from './CafesContainer.style';

import { useStoreList, useCurrentLocation, useToggleSheet } from '@/hooks';

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
    discount_price: 300
  },
  {
    id: 2,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 300
  },
  {
    id: 3,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 300
  },
  {
    id: 4,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    street_name_address: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discount_price: 300
  },
  {
    id: 5,
    name: '투썸 플레이스 리첸시아점',
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
  const [location, setLocation] = useState('서울 용산구 백범로90길 90');

  const { data, loading } = useStoreList(
    { limit: 6, page: 1 },
    () => {},
    () => {}
  );
  const { location: position, error } = useCurrentLocation();

  console.log(position);
  console.log(error);

  console.log(data);

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

  const handleSetLocation = () => {
    console.log('현재 위치로');
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
      <UserLocation location={location} handleSetLocation={handleSetLocation} />
      <CafeList cafes={cafes} />
      {sheetState && (
        <ReactPortal>
          <BottomSheet />
        </ReactPortal>
      )}
    </Style.CafesContainer>
  );
}
