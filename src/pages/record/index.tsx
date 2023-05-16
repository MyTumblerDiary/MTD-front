import Layout from '../../components/Layout/Layout';
import PageHead from '@/components/Common/Head/Head';
import ChooseButtons from '@/components/Record/ChooseButtons/ChooseButtons';

export default function Record() {
  return (
    <div>
      <PageHead title='기록하기' />
      <ChooseButtons />
    </div>
  );
}

Record.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
