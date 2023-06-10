import PageHead from '@/components/Common/Head/Head';
import Layout from '@/components/Layout/Layout';
import ChangePassword from '@/components/Mypage/ChangePassword/ChangePassword';

export default function ChangePasswordPage() {
  return (
    <div>
      <PageHead title='비밀번호 변경' />
      <ChangePassword />
    </div>
  );
}

ChangePasswordPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
