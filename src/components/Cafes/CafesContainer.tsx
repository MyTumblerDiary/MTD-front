import { useState } from 'react';

import * as Style from './CafesContainer.style';

import Header from '../Common/Header/Header';
import CafeList from './CafeList/CafeList';
import UserLocation from './UserLocation/UserLocation';
import CafeSearchWrapper from './CafeSearchWrapper/CafeSearchWrapper';

export default function CafesContainer() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchingState = () => {
    setIsSearching(true);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Style.CafesContainer>
      <Header title='카페' />
      <CafeSearchWrapper
        isSearching={isSearching}
        handleSearchingState={handleSearchingState}
        handleSearchSubmit={handleSearchSubmit}
      />
      <UserLocation />
      <CafeList />
    </Style.CafesContainer>
  );
}
