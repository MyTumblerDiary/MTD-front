import * as Style from './CafesContainer.style';

import { useRouter } from 'next/router';

import CafeList from './CafeList/CafeList';
import Header from '../Common/Header/Header';
import SearchResultHeader from './SearchResultHeader/SearchResultHeader';

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
