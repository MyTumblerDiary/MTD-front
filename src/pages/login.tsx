import PageHead from '@/components/Head/Head';
import Layout from '../components/Layout/Layout';
import LoginForm from '@/components/Login/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <PageHead title='로그인' />
      <LoginForm />
    </div>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
