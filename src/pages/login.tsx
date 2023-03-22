import Layout from '../components/Layout/Layout';

export default function Login() {
  return <div> 로그인</div>;
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
