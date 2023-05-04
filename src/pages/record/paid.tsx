import Layout from '@/components/Layout/Layout';
import PageHead from '@/components/Common/Head/Head';
import PaidContainer from '@/components/Record/PaidContainer/PaidContainer';

export default function RecordPaid() {
  return (
    <>
      <PageHead title='기록하기' />
      <PaidContainer />
    </>
  );
}

RecordPaid.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
