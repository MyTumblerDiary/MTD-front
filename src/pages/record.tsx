import Layout from '../components/Layout/Layout';

export default function Record() {
  return <div>기록하는 페이지</div>;
}

Record.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
