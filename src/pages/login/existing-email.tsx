import { useRouter } from 'next/router';

import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import ExistingEmailContainer from '@/components/Login/ExistingEmail/ExistingEmail';

const ExistingEmail = () => {
  const router = useRouter();
  const email = router.query.email as string;

  return (
    <div>
      <PageHead title='이미 존재하는 계정' />
      <ExistingEmailContainer email={email} />
    </div>
  );
};

export default ExistingEmail;

ExistingEmail.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
