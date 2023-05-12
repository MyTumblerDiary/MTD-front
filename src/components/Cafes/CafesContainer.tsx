import { useState } from 'react';

import * as Style from './CafesContainer.style';

import MainHeader from '../Common/MainHeader/MainHeader';
import CafeList from './CafeList/CafeList';
import UserLocation from './UserLocation/UserLocation';
import CafeSearchWrapper from './CafeSearchWrapper/CafeSearchWrapper';
import { useToggleSheet } from '@/hooks';
import ReactPortal from '../Common/BottomSheetFrame/ReactPortal';
import BottomSheet from './BottomSheet/BottomSheet';
import Router from 'next/router';

type CafesProps = CafeProps[];

interface CafeProps {
  id: number;
  thumbnail: string;
  cafe: string;
  branch: string;
  address: string;
  discountAmount: number;
}

const cafes: CafesProps = [
  {
    id: 1,
    thumbnail: 'https://picsum.photos/150/120',
    cafe: '투썸 플레이스',
    branch: '리첸시아점',
    address: '서울 용산구 백범로 90길 120',
    discountAmount: 300
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/150/120',
    cafe: '스타벅스',
    branch: '길다길어 엄청 긴 지점의 이름',
    address: '서울 길고긴 길다길로 길길길길 123330',
    discountAmount: 400
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/150/120',
    cafe: '투썸 플레이스',
    branch: '리첸시아점',
    address: '서울 용산구 백범로 90길 120',
    discountAmount: 500
  },
  {
    id: 4,
    thumbnail: 'https://picsum.photos/150/120',
    cafe: '투썸 플레이스',
    branch: '리첸시아점',
    address: '서울 용산구 백범로 90길 120',
    discountAmount: 300
  },
  {
    id: 5,
    thumbnail: 'https://picsum.photos/150/120',
    cafe: '투썸 플레이스',
    branch: '리첸시아점',
    address: '서울 용산구 백범로 90길 120',
    discountAmount: 500
  },
  {
    id: 6,
    thumbnail: 'https://picsum.photos/150/120',
    cafe: '투썸 플레이스',
    branch: '리첸시아점',
    address: '서울 용산구 백범로 90길 120',
    discountAmount: 300
  }
];

export default function CafesContainer() {
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('서울 용산구 백범로90길 90');
  const { sheetState } = useToggleSheet();

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
