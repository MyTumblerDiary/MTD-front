import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import SignupContainer from '@/components/Signup/SignupContainer';

export default function Signup() {
  return (
    <>
      <PageHead title='회원가입' />
      <SignupContainer />
    </>
  );
}

Signup.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
