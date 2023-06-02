import Router from 'next/router';
import { useRef, useState } from 'react';

import * as Style from './CafesContainer.style';

import {
  useStoreList,
  useCurrentCoords,
  useToggleSheet,
  useAddressByCoords,
  useIntersectionObserver
} from '@/hooks';

import MainHeader from '../Common/MainHeader/MainHeader';
import CafeList from './CafeList/CafeList';
import UserLocation from './UserLocation/UserLocation';
import CafeSearchWrapper from './CafeSearchWrapper/CafeSearchWrapper';
import ReactPortal from '../Common/BottomSheetFrame/ReactPortal';
import BottomSheet from './BottomSheet/BottomSheet';

export default function CafesContainer() {
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState('');
  const page = useRef(1);
  const { sheetState } = useToggleSheet();

  const {
    data,
    fetchMore,
    loading: fetchStoreLoading
  } = useStoreList(
    { limit: 6, page: page.current },
    () => {},
    () => {}
  );

  const {
    isLoading: getCoordLoading,
    coords,
    getUserCoords
  } = useCurrentCoords();
  const { userAddress } = useAddressByCoords(coords);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      observer.unobserve(entry.target);

      if (!fetchStoreLoading) {
        page.current += 1;

        fetchMore({
          variables: {
            paginationInput: { limit: 6, page: page.current }
          }
        });
      }
    },
    {
      threshold: 0.7
    }
  );

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
        isLoading={getCoordLoading}
      />
      <CafeList cafes={data?.stores} />
      <Style.Target ref={ref} />
      {sheetState && (
        <ReactPortal>
          <BottomSheet />
        </ReactPortal>
      )}
    </Style.CafesContainer>
  );
}
