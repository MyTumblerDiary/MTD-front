import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import PasswordRecoveryContainer from '@/components/PasswordRecovery/PasswordRecoveryContainer';

export default function PasswordRecovery() {
  return (
    <>
      <PageHead title='비밀번호 찾기' />
      <PasswordRecoveryContainer />
    </>
  );
}

PasswordRecovery.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
