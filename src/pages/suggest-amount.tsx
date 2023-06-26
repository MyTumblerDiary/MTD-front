import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import SuggestAmountContainer from '@/components/SuggestAmount/SuggestAmountContainer';

export default function SuggestAmount() {
  return (
    <>
      <PageHead title='할인금액수정제안' />
      <SuggestAmountContainer />
    </>
  );
}

SuggestAmount.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={false} bottomNavigator={false}>
      {page}
    </Layout>
  );
};
