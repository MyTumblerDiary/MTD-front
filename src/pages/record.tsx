import Layout from '../components/Layout/Layout';
import PageHead from '@/components/Common/Head/Head';

export default function Record() {
  return (
    <div>
      <PageHead title='기록하기' />
      기록하는 페이지
    </div>
  );
}

Record.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
