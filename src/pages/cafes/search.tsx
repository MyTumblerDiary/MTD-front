import SearchResultContainer from '@/components/Cafes/SearchResultContainer';
import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';

export default function CafeSearchResult() {
  return (
    <>
      <PageHead title='카페 검색결과' />
      <SearchResultContainer />
    </>
  );
}

CafeSearchResult.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
