import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import UnPaidContainer from '@/components/Record/UnPaidContainer/UnPaidContainer';

export default function RecordUnPaid() {
  return (
    <>
      <PageHead title='기록하기' />
      <UnPaidContainer />
    </>
  );
}

RecordUnPaid.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
