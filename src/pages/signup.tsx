import PageHead from '@/components/Head/Head';
import Layout from '@/components/Layout/Layout';
import SignupForm from '@/components/Signup/SignupForm';

export default function Signup() {
  return (
    <>
      <PageHead title='회원가입' />
      <SignupForm />;
    </>
  );
}

Signup.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
