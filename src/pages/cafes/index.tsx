import styled from 'styled-components';

import PageHead from '@/components/Common/Head/Head';
import MainHeader from '@/components/Common/MainHeader/MainHeader';
import CafeSearchWrapper from '@/components/Cafes/CafeSearchWrapper/CafeSearchWrapper';
import UserLocation from '@/components/Cafes/UserLocation/UserLocation';
import CafeList from '@/components/Cafes/CafeList/CafeList';

export default function Cafes() {
  return (
    <>
      <PageHead title='카페' />
      <CafesContainer>
        <CafeSearchWrapper />
        <UserLocation />
        <CafeList />
      </CafesContainer>
    </>
  );
}

export const CafesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  background-color: #f5f5f5;
`;
