import PageHead from '@/components/Head/Head';
import Layout from '../components/Layout/Layout';
import LoginComponent from '@/components/Login/Login';

export default function Login() {
  return (
    <div>
      <PageHead title='로그인' />
      <LoginComponent />
    </div>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
