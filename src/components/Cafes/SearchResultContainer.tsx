import * as Style from './CafesContainer.style';

import { useRouter } from 'next/router';

import { type CafesProps } from '@/types';

import CafeList from './CafeList/CafeList';
import Header from '../Common/Header/Header';
import SearchResultHeader from './SearchResultHeader/SearchResultHeader';

const cafes: CafesProps = [
  {
    id: 1,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    streetNameAddress: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discountPrice: 500
  },
  {
    id: 2,
    name: '투썸 플레이스 리첸시아점2',
    thumbnail: 'https://picsum.photos/150/120',
    streetNameAddress: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09798,
    discountPrice: 300
  },
  {
    id: 3,
    name: '투썸 플레이스 리첸시아점3',
    thumbnail: 'https://picsum.photos/150/120',
    streetNameAddress: '서울 용산구 백범로 90길 120',
    latitude: 37.5599,
    longitude: 127.09598,
    discountPrice: 300
  },
  {
    id: 4,
    name: '투썸 플레이스 리첸시아점4',
    thumbnail: 'https://picsum.photos/150/120',
    streetNameAddress: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discountPrice: 300
  },
  {
    id: 5,
    name: '투썸 플레이스 리첸시아점5',
    thumbnail: 'https://picsum.photos/150/120',
    streetNameAddress: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discountPrice: 300
  },
  {
    id: 6,
    name: '투썸 플레이스 리첸시아점',
    thumbnail: 'https://picsum.photos/150/120',
    streetNameAddress: '서울 용산구 백범로 90길 120',
    latitude: 37.54699,
    longitude: 127.09598,
    discountPrice: 300
  }
];

export default function SearchResultContainer() {
  const router = useRouter();

  const {
    query: { keyword }
  } = router;

  return (
    <Style.CafesContainer>
      <Header title='검색결과' />
      <SearchResultHeader keyword={keyword as string} count={cafes.length} />
      <CafeList cafes={cafes} />
    </Style.CafesContainer>
  );
}
