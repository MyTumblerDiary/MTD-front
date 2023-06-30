import styled from 'styled-components';

import PageHead from '@/components/Common/Head/Head';
import Header from '@/components/Common/Header/Header';
import Layout from '@/components/Layout/Layout';
import SearchResultHeader from '@/components/Cafes/SearchResultHeader/SearchResultHeader';
import CafeList from '@/components/Cafes/CafeList/CafeList';

export default function CafeSearchResult() {
  return (
    <>
      <PageHead title='카페 검색결과' />
      <CafesContainer>
        <Header title='검색결과' />
        <SearchResultHeader />
        <CafeList />
      </CafesContainer>
    </>
  );
}

CafeSearchResult.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={false} bottomNavigator={false}>
      {page}
    </Layout>
  );
};

const CafesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  background-color: #f5f5f5;
`;
